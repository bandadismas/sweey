import Image from "next/image";
import SignUpForm from '@/app/ui/user/sign-up';


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
                <SignUpForm />
            </div>
        </div>
    )
}