import Link from "next/link";
// import { ChevronDown } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const navlinks = [
    {
        id: "home",
        name: "Home",
        href: "/",
    },
    {
        id: "works",
        name: "How it works",
        href: "/how-it-works",
    },
    {
        id: "services",
        name: "Services",
        href: "/services",
    },
    {
        id: "resources",
        name: "Resources",
        href: "/resources",
    }
]

export default function Navbar() {
    return (
        <div>
            <nav className="container px-20 border-b flex items-center justify-between">
                <div className="flex gap-6 py-4">
                    {navlinks.map((link, id) => (
                        <div key={id}>
                            <Link href={"/"} className="text-base font-medium">
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div>
                        <Link href={"/"} className="text-gray-10 font-medium flex flex-col justify-center items-center" >
                            <HelpCircle className=" w-5" />
                            <span className="text-sm">Help</span>
                        </Link>
                    </div>

                    <div>
                        <Link href={"/"} className="text-gray-10 font-medium flex flex-col justify-center items-center" >
                            <CircleUserRound className=" w-5" />
                            <span className="text-sm">Account</span>
                        </Link>
                    </div>


                    <Button className="inline-block bg-primary-20">
                        <Plus className="inline-block w-5 mr-2" />
                        Post Job
                    </Button>
                </div>
            </nav>
        </div>
    )
}