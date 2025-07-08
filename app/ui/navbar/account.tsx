'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserIcon, BriefcaseIcon, StarIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { logOut } from '@/app/lib/actions';

export default function Page() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const fill = isDropDownOpen ? 'black' : 'none';


    return (
        <div>
            <UserIcon
                fill={fill}
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                className={`${isDropDownOpen ? 'bg-tertiary fill-white' : ''}h-[25px] w-[25px] cursor-pointer rounded-2xl`}
            />
            {isDropDownOpen && (
                <>
                    <div className='fixed top-10 right-3 w-[250px] z-10 rounded-lg shadow-md bg-white'>
                        <Link href="/user/account"
                            className='flex items-center text-lg py-5 px-5 rounded-lg hover:bg-gray-100'
                        >
                            <UserIcon className='h-[25px] w-[25px] mr-4' />
                            Manage My Account
                        </Link>
                        <Link href="/user/orders"
                            className='flex items-center text-lg py-5 px-5 rounded-lg hover:bg-gray-100'
                        >
                            <BriefcaseIcon className='h-[25px] w-[25px] mr-4' />
                            My Order
                        </Link>
                        <Link href="/user/reviews"
                            className='flex items-center text-lg py-5 px-5 rounded-lg hover:bg-gray-100'
                        >
                            <StarIcon className='h-[25px] w-[25px] mr-4' />
                            My Reviews
                        </Link>
                        <form
                            action={logOut}
                        >
                            <button
                                className='flex items-center w-full text-lg py-5 px-5 rounded-lg hover:bg-gray-100'
                            >
                                <ArrowLeftStartOnRectangleIcon className='h-[25px] w-[25px] mr-4' />
                                Log Out
                            </button>
                        </form>

                    </div>
                    <div onClick={() => setIsDropDownOpen(false)}
                        className='w-full h-[100dvh] bg-black opacity-20 fixed top-0 left-0'
                    ></div>
                </>
            )}
        </div>
    )

}