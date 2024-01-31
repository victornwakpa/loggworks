import Image from "next/image";
import bg from "@/public/assets/hero-image.png";
import checked from "@/public/assets/checked.svg";
import { MapPin, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import partnerOne from "@/public/assets/partner-1.png";
import partnerTwo from "@/public/assets/partner-2.png";
import partnerThree from "@/public/assets/partner-3.png";
import partnerFour from "@/public/assets/partner-4.png";
import partnerFive from "@/public/assets/partner-5.png";

// const styles = {
//     backgroundImage: `url(${bg})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//   };

export default function HeroSection() {
    return (
        // <div className="w-full h-72" style={styles}>
        //     <h1>Hero</h1>
        // </div>
        <div>
            <div className="relative">
                <Image src={bg} alt="hero image" className="w-full" />

                <div className="absolute inset-0 flex flex-col container px-20 justify-center">
                    <div className="w-2/3">
                        <h1 className="text-5xl font-bold text-gray-0 leading-tight">Find reliable home service providers near you</h1>

                        <div className="grid grid-cols-2 w-[80%] mt-2">
                            <div className="flex items-center gap-2 mt-5">
                                <Image src={checked} alt="checked" className="inline-block" />
                                <span>100% cost-free job postings</span>
                            </div>

                            <div className="flex items-center gap-2 mt-5">
                                <Image src={checked} alt="checked" className="inline-block" />
                                <span>Get Multiple Quotes, Free of Charge</span>
                            </div>

                            <div className="flex items-center gap-2 mt-5">
                                <Image src={checked} alt="checked" className="inline-block" />
                                <span>Payment and Privacy Protection</span>
                            </div>

                            <div className="flex items-center gap-2 mt-5">
                                <Image src={checked} alt="checked" className="inline-block" />
                                <span>Vetted and reliable Professionals</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="col-start-3 col-end-8 gap-5 py-3">
                            <div className="flex items-center border border-gray-300 p-2 w-fit bg-white rounded-md">
                                <input type="text" placeholder="Electrician" className="border-r-2 outline-none w-44" />
                                <MapPin className="ml-2 inline-block w-4 text-gray-400" />
                                <input type="text" placeholder="Town/postcode" className="border-none outline-none w-44 ml-2" />
                                <Search className="ml-2 inline-block w-4 text-gray-400" />
                            </div>

                        </div>

                        <Button className="inline-block bg-primary-20 px-8">
                            <Plus className="inline-block w-5 mr-2" />
                            Post Job
                        </Button>
                    </div>
                </div>

            </div>

            {/* PARTNERS */}
            <div className="flex items-center gap-20 bg-gray-90 container px-20 py-3 text-center">
                <Image src={partnerOne} alt="partner" className="inline-block" />
                <Image src={partnerTwo} alt="The Telegraph logo" className="inline-block" />
                <Image src={partnerThree} alt="EveningStandard logo" className="inline-block" />
                <Image src={partnerFour} alt="london logo" className="inline-block" />
                <Image src={partnerFive} alt="Fast company logo" className="inline-block" />
            </div>
        </div>
    )
} 