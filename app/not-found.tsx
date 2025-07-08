import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ooops! Page not found",
    description: "Sweey is the best E-Commerce Site that you could ever ask for."
}

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col h-[50dvh]">
            <h1 className="text-5xl font-semibold py-10">404 Not Found</h1>
            <p>Your visited page not found. You can return to the home page.</p>
            <Link 
                href={'/'}
                className="bg-tertiary py-2 px-10 text-white mt-10 rounded-lg shadow-lg"
            >
                Back to home page
            </Link>
        </div>
    )
}