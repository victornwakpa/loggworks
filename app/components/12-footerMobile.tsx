import Accordian, { AccordianItem } from "./Accordian";
import Image from "next/image";
import facebook from "@/public/assets/socials/facebook-fill.svg";
import twitter from "@/public/assets/socials/twitter-fill.svg";
import instagram from "@/public/assets/socials/instagram-fill.svg";
import linkedin from "@/public/assets/socials/linkedin-box-fill.svg";
import youtube from "@/public/assets/socials/youtube-fill.svg";
import Logo from "@/public/assets/logo-footer.png";
import { Button } from "@/components/ui/button";

export default function FooterMobile() {

    const defaultValue = 3;

    return (
        <div className="bg-[#1D1D1D] text-gray--100 py-8 px-5 lg:hidden">
            <main className="flex flex-col mb-10">
                <Accordian value={defaultValue} className="max-w-lg">
                    <AccordianItem value="1" trigger="Homeowners">
                        <div className="flex flex-col gap-4">
                            <p className="">Post a Job</p>
                            <p className="">How it works</p>
                            <p className="">Contact Us</p>
                            <p className="">Helps & FAQs</p>
                            <p className="">User Agreement</p>
                        </div>
                    </AccordianItem>

                    <AccordianItem value="2" trigger="Professionals">
                        <div className="flex flex-col gap-4">
                            <p className="">Sign Up</p>
                            <p className="">Blog</p>
                            <p className="">Contact Us</p>
                            <p className="">Helps & FAQs</p>
                            <p className="">User Agreement</p>
                        </div>
                    </AccordianItem>

                    <AccordianItem value="3" trigger="Loggworks">
                        <div className="flex flex-col gap-4">
                            <p className="">About us</p>
                            <p className="">Careers</p>
                            <p className="">Partners</p>
                            <p className="">Affliate</p>
                        </div>
                    </AccordianItem>

                    <AccordianItem value="4" trigger="Follow us">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-1">
                                <Image src={facebook} alt="facebook" className="inline-block w-5 h-5" />
                                Facebook
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={twitter} alt="twitter" className="inline-block w-5 h-5" />
                                Twitter
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={instagram} alt="instagram" className="inline-block w-5 h-5" />
                                Instagram
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={youtube} alt="youtube" className="inline-block w-5 h-5" />
                                Youtube
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={linkedin} alt="linkedin" className="inline-block w-5 h-5" />
                                LinkedIn
                            </div>
                        </div>
                    </AccordianItem>
                </Accordian>
            </main>

            <div className="flex flex-col pb-10 justify-center items-center border-b border-gray-500">
                <Button className="py-6 w-full mb-4 bg-primary-20 focus:bg-primary-20">Become a Professional</Button>
                <Button className="py-6 w-full mb-6 border bg-transparent">Post a Job</Button>
                <Image src={Logo} alt="logo" />
            </div>

            <div className="flex-col pt-10 justify-between text-white">
                <p className="text-center lg:text-left">©Copyright 2024 loggwork Ltd. All Rights Reserved</p>
                <div className="hidden lg:flex place-items-end divide-x">
                    <p className="px-2">Terms of Use</p>
                    <p className="px-2">Privacy Policy</p>
                    <p className="px-2">Cookies</p>
                    <p className="px-2">Sitemap</p>
                </div>

                {/* MOBILE */}
                <div className="flex lg:hidden flex-col justify-center items-center mt-4 text-gray-100 gap-4">
                    <div className="flex lg:hidden divide-x">
                        <p className="px-4">Terms of Use</p>
                        <p className="px-4">Privacy Policy</p>
                    </div>
                    <div className="flex lg:hidden divide-x">
                        <p className="px-4">Cookies</p>
                        <p className="px-4">Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}