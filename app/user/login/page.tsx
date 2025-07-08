import Image from "next/image";
import SignInForm from '@/app/ui/user/sign-in';


export default function Page() {
    return(
        <div className="grid md:grid-cols-2 items-center">
            <Image 
                src={"/images/Side Image.png"}
                alt={"Side Image"}
                width={805}
                height={781}
                className="hidden md:block"
            />
            <div className="w-full flex justify-around ">
                <SignInForm />
            </div>
        </div>
    )
}