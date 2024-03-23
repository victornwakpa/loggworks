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
import { Input } from "@/components/ui/input"

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
        <div className="bg-[#F8F7FA]">
            <div className="relative lg:mt-14">
                <Image src={bg} alt="hero image" className="w-full hidden lg:block" />

                <div className="lg:absolute inset-0 flex flex-col container mt-[55px] lg:mt-0 px-5 py-20 lg:py-9 lg:px-20 justify-center">
                    <div className="lg:w-2/3">
                        <h1 className="text-[32px] lg:text-[52px] text-center lg:text-left font-bold text-gray-0 leading-[40px] lg:leading-[64px]">Find reliable home service providers near you</h1>

                        <p className="lg:hidden text-center leading-[26px] mt-5">Loggworks connect homeowners to genuine and reliable service providers who provide easy-to-book and hassle-free services.</p>

                        <div className="hidden lg:grid grid-cols-2 w-[80%] mt-2">
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

                    <div className="flex flex-col lg:flex-row items-center gap-4 mt-[32px] lg:mt-4">
                        <div className="lg:grid hidden col-start-3 col-end-8 gap-5 py-3">
                            <div className="flex items-center border border-gray-300 p-2 w-fit bg-white rounded-md">
                                <input type="text" placeholder="Electrician" className="border-r-2 outline-none w-44" />
                                <MapPin className="ml-2 inline-block w-4 text-gray-400" />
                                <input type="text" placeholder="Town/postcode" className="border-none outline-none w-44 ml-2" />
                                <Search className="ml-2 inline-block w-4 text-gray-400" />
                            </div>
                        </div>

                        {/* MOBILE SEARCH */}
                        <input type="text" placeholder="Try searching carpenter..." className="lg:hidden block border-gray-300 w-full border p-2 bg-gray--100 outline-none focus:outline-none rounded-md" />

                        <Button className="bg-primary-20 w-full lg:w-fit px-8">
                            <Plus className="inline-block w-5 mr-2" />
                            Post Job
                        </Button>
                    </div>
                </div>

            </div>

            {/* PARTNERS */}
            <div className="bg-gray-90 lg:block px-5 py-5 lg:py-0 lg:px-0">
                <p className="lg:hidden text-low-emphasis">Featured on</p>
                <div className="lg:container lg:px-20 lg:py-3 flex items-center gap-20 overflow-x-hidden scrollable-content">
                    <Image src={partnerOne} alt="partner" className="hidden lg:inline-block" />
                    <Image src={partnerTwo} alt="The Telegraph logo" className="inline-block w-[111.665px] h-[20.188px]" />
                    <Image src={partnerThree} alt="EveningStandard logo" className="inline-block w-[155.432px] h-[20.188px]" />
                    <Image src={partnerFour} alt="london logo" className="inline-block w-[59.97px] h-[44.414px]" />
                    <Image src={partnerFive} alt="Fast company logo" className="inline-block w-[113.839px] h-[48.451px]" />
                </div>
            </div>
        </div>
    )
} 