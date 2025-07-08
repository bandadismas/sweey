'use server';

import { signOut, signIn } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/app/lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';




const userSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Email is required' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export type userState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string | null;
}

export async function login(prevState: userState, formData: FormData) {
    console.log('Login route');

    const validatedFields = userSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to login',
        };
    }

    const { email, password } = validatedFields.data;


    try {
        await signIn('credentials', {email, password, redirectTo: '/'});
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {message: 'Credential error.'};
                default:
                    return {message: 'Something went wrong.'};
            }
        }
        throw error;
    }
}


export async function signUp(prevState: userState, formData: FormData) {
    console.log('Sign up route');

    const validatedFields = userSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Account',
        };
    }

    const { email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);


    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return {
                message: 'Credential error',
            };
        }

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });


    } catch (error) {
        console.log('error', error);

        return {
            message: 'Something went wrong',
        };
    }

    redirect('/user/login');
}

export async function logOut() {
    console.log('logging out');
    await signOut({ redirectTo: '/' });
}
