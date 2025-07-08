'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', name: 'Home' },
    { href: '/contact', name: 'Contact' },
    { href: '/about', name: 'About' },
    { href: '/user/signUp', name: 'SignUp' },

];


export default function Page({ session }: { session: any }) {
    const pathname = usePathname();

    return (
        <>
            {links.map(link => {
                if (session && link.name === 'SignUp') {
                    return null;
                }

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${pathname === link.href ? 'border-b border-gray-500' : 'text-gray-500'} py-3 md:py-0 text-xl mx-4 hover:text-red-400`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}