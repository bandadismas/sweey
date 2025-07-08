'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import NavLinks from "@/app/ui/navbar/nav-links";


export default function Page({ session }: { session: any }) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <div
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            className='md:hidden'
        >
            <Bars3Icon className='h-[30px] w-[30px] cursor-pointer' />
            {isDropDownOpen && (
                <>
                    <div className='fixed top-10 right-3 w-[250px] z-10 rounded-lg shadow-md bg-white'>
                        <div className='flex flex-col items-center'>
                            <NavLinks session={session}/>
                        </div>
                    </div>
                    <div onClick={() => setIsDropDownOpen(false)}
                        className='w-full h-[100dvh] bg-black opacity-20 fixed top-0 left-0'
                    ></div>
                </>
            )}
        </div>
    )
}