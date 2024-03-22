import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="bg-white lg:border-b">
            <nav className="hidden container px-20 lg:flex items-center justify-between">
                <div className="flex items-center gap-14 h-16 text-gray-10">
                        <div>
                            <Link href={"/"} className="text-base text-primary-20 font-medium">
                            Home
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            How it works
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            Services
                            <ChevronDown className="inline-block ml-2 w-4" />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"} className="text-base font-medium">
                            Resources
                            <ChevronDown className="inline-block ml-2 w-4" />
                            </Link>
                        </div>
                </div>

                <div className="flex items-center gap-6">
                    <div>
                        <Link href={"/"} className="text-gray-10 flex flex-col justify-center items-center" >
                            <HelpCircle className="w-[24px]" />
                            <span className="text-[12px] font-semibold">Help</span>
                        </Link>
                    </div>

                    <div>
                        <Link href={"/"} className="text-gray-10 flex flex-col justify-center items-center" >
                            <CircleUserRound className="w-[24px]" />
                            <span className="text-[12px] font-semibold">Account</span>
                        </Link>
                    </div>


                    <Button className="inline-block bg-primary-20 ml-2 hover:bg-primary-20 text-sm text-white">
                        <Plus className="inline-block w-5 mr-2" />
                        Post Job
                    </Button>
                </div>
            </nav>
        </div>
    )
}