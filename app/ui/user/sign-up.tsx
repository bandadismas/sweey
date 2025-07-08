'use client';

import Link from "next/link";
import { useActionState } from "react";
import { signUp, userState } from "@/app/lib/actions";
import { Loader2Icon } from "lucide-react"

export default function Page() {
    const initialState: userState = {
        errors: {},
        message: null,
    };
    const [state, formAction, isPending] = useActionState(signUp, initialState);


    return(
        <form action={formAction}>
                    <h1 className="text-4xl font-bold py-5">Create an Account</h1>
                    <h4 className="text-lg mb-10">Enter your details below</h4>
                    <div className="flex flex-col text-xl">
                        <input type="email" id="email" placeholder="Email" name="email" 
                            className="border-b-1  focus:outline-none focus:border-b-1"
                        />
                    </div>
                    {state?.errors?.email && 
                        <p className="text-red-500">{state.errors.email.join(', ')}</p>
                    }
                    <div className="flex flex-col mt-10 text-xl">
                        <input type="password" id="password" placeholder="Password" name="password" 
                            className="border-b-1  focus:outline-none focus:border-b-1"
                        />
                    </div>
                    {state?.errors?.password && 
                        <p className="text-red-500">{state.errors.password.join('. ')}</p>
                    }
                    <button 
                        type="submit"
                        className="w-full bg-tertiary py-2 rounded-lg text-white mt-10 relative"
                        disabled={isPending}
                    >
                        {isPending && <Loader2Icon className="animate-spin absolute left-1" />}
                        Create Account
                    </button>
                    {state?.message && 
                        <p className="text-red-500">{state.message}</p>
                    }
                    <div className="flex justify-center space-x-1 mt-10">
                        <p>Already have an account?</p>
                        <Link 
                            className="border-b"
                            href="/user/login"
                        >
                        Log In
                        </Link>
                    </div>
                </form>
    )
}