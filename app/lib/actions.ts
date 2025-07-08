'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';


export async function logOut() {
    console.log('logging out');
    await signOut();
    redirect('/');
}