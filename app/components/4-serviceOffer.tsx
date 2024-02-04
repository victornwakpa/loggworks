import Image from "next/image";
import OuterImage from "@/public/assets/image-1.png";
import innerImage from "@/public/assets/image-1.1.png";
import OuterImageM from "@/public/assets/image-mobile-1.png";
import innerImageM from "@/public/assets/image-mobile-1.1.png";
import { Button } from "@/components/ui/button";

export default function ServiceOffer() {
    return (
        <div className="container px-5 lg:px-20 py-16">
            <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden">
                <div className="relative lg:w-1/2">
                    <Image src={OuterImage} alt="outer image" className="hidden lg:block w-full h-full" />
                    <Image src={innerImage} alt="inner image" className="hidden lg:block absolute bottom-4 left-4" />

                    {/* MOBILE VIEW */}
                    <Image src={OuterImageM} alt="outer image" className="lg:hidden w-full h-full" />
                    <Image src={innerImageM} alt="inner image" className="lg:hidden absolute bottom-4 left-4" />
                </div>

                <div className="flex-1 lg:w-1/2 bg-gray-100 px-5 lg:px-24 py-10 lg:py-20 flex justify-center items-center">
                    <div>
                        <div className="w-4/5">
                            <h2 className="lg:text-4xl lg:w-full text-2xl font-bold text-gray-0 mb-4">Do you have a service to offer?</h2>
                        </div>
                        <p className="text-gray-20">All your payments are protected by a highly secure Escrow account. Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
                        <Button className="bg-primary-20 w-full lg:w-fit mt-8 px-10 py-6">Become a professional</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}