"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MapPin } from "lucide-react";
import { Search } from 'lucide-react';
// import { usePathname } from "next/navigation";

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
    // const pathname = usePathname();
    return (
        <div className="bg-white lg:border-b">
            <div className="grid grid-cols-9 gap-4 container px-20">
                <Link href={"/"} className="col-start-1 col-end-3 flex items-center">
                    <Image src={logo} alt={"the website logo"} />
                </Link>

                <div className="col-start-3 col-end-8 gap-5 py-3">
                    <div className="flex items-center border border-gray-300 p-2 w-fit bg-white rounded-md">
                        <input type="text" placeholder="Electrician" className="border-r-2 outline-none w-40" />
                        <MapPin className="ml-2 inline-block w-4 text-gray-400" />
                        <input type="text" placeholder="Town/postcode" className="border-none outline-none w-40 ml-2" />
                        <Search className="ml-2 inline-block w-4 text-gray-400" />
                    </div>
                    
                </div>

                <div className="flex items-center justify-end col-start-8 col-end-10 gap-4 font-semibold">
                    <Link href="#" className="text-slate-500">Professional</Link>
                    <Link href="#" className="border-primary py-5 border-b-2">Consumer</Link>
                </div>

                {/* <div>
                    {links.map((link, id) => (
                        <div key={id} className="flex flex-row">
                            {pathname === link.href ? (
                                <Link className="text-lg font-semibold text-yellow-600" href="#">
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href="#" className="text-lg font-semibold text-red-600 transition duration-100 hover:text-primary">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div> */}

                {/* <Menu className="lg:hidden" /> */}
            </div>
        </div>
    );
}