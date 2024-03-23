import Image from "next/image";
import logo from "@/public/assets/logo.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import { MapPin } from "lucide-react";
import { Search } from 'lucide-react';

const links = [
    {
        id: "professional",
        href: "/professional",
        name: "Professional",
    },
    {
        id: "consumer",
        href: "/Consumer",
        name: "Consumer",
    }
]

export default function TopNav() {
    return (
        <div>
            <div className="bg-white lg:border-b lg:block hidden">
                <div className="grid grid-cols-9 gap-4 container px-20">

                    <Link href={"/"} className="col-start-1 col-end-3 py-4 flex items-center">
                        <Image src={logo} alt={"the website logo"} width={148} height={24} />
                    </Link>

                    <div className="col-start-3 col-end-8 gap-5 py-4">
                        <div className="flex items-center justify-between border border-gray-300 p-2 w-[420px] bg-white rounded-md">
                            <input type="text" placeholder="Electrician" className="border-r-2 outline-none w-40" />
                            <MapPin className="inline-block w-4 text-grey-40" />
                            <input type="text" placeholder="Town/postcode" className="border-none outline-none w-[165px]" />
                            <Search className="ml-2 inline-block w-4 text-grey-40" />
                        </div>

                    </div>

                    <div className="flex items-center justify-end col-start-8 col-end-10 gap-4 font-semibold ">
                        <Link href="#" className="text-gray-20">Professional</Link>
                        <Link href="#" className="border-primary text-gray-0 border-b-[3px] py-5">Consumer</Link>
                    </div>


                </div>
            </div>

            {/* MOBILE HEADER */}
            <div className="lg:hidden bg-white" >
                <div className="flex justify-between items-center px-5 h-[60px]">
                    <Link href={"/"} className="col-start-1 col-end-3 py-4 flex items-center">
                        <Image src={logo} alt={"the website logo"} width={148} height={24} />
                    </Link>

                    <div className="flex gap-3">
                        <CircleUserRound className="w-[42px]" />
                        <Menu className="" />
                    </div>
                </div>
            </div>
        </div>
    );
}