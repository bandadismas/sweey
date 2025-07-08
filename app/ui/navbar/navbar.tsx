import Link from "next/link";
import NavLinks from "@/app/ui/navbar/nav-links";
import Search from "@/app/ui/navbar/search";
import { auth } from "@/auth";
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Account from "@/app/ui/navbar/account";
import MobileNav from "@/app/ui/navbar/mobile-nav";


export default async function Navbar() {
    const session = await auth();
    console.log('session', session);

    return (
        <header className="flex justify-between px-1 py-1 items-center space-x-1 border-b border-gray-200">
            <Link href="/" className="text-2xl font-bold">Sweey</Link>
            <nav className="hidden md:flex">
                <NavLinks session={session}/>
            </nav>
            <div className="flex justify-between items-center space-x-5">
                <Search placeholder="What are you looking for?"/>
                {session &&
                <div className="flex justify-between items-center space-x-3">
                    <HeartIcon className="h-[25px] w-[25px] hidden md:block"/>
                    <Link href="/cart">
                    <ShoppingCartIcon className="h-[25px] w-[25px] "/>
                    </Link>
                    <Account />
                </div>}
            </div>
            <MobileNav session={session}/>
        </header>
    )
}