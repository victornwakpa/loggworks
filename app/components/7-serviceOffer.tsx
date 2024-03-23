import Image from "next/image";
import OuterImage from "@/public/assets/image-2.png";
import innerImage from "@/public/assets/image-1.1.png";
import OuterImageM from "@/public/assets/image-mobile-2.png";
import innerImageM from "@/public/assets/image-mobile-1.1.png";
import { Button } from "@/components/ui/button";

export default function ServiceOfferR() {
    return (
        <div className="container px-5 lg:px-20 py-16">
            <div className="flex flex-col-reverse lg:flex-row-reverse rounded-lg overflow-hidden">
                <div className="relative lg:w-1/2">
                    <Image src={OuterImage} alt="outer image" className="hidden lg:block w-full h-full" />
                    <Image src={innerImage} alt="inner image" className="hidden lg:block absolute bottom-4 right-4" />

                    {/* MOBILE VIEW */}
                    <Image src={OuterImageM} alt="outer image" className="lg:hidden w-full h-full" />
                    <Image src={innerImageM} alt="inner image" className="lg:hidden absolute bottom-4 left-4" />
                </div>

                <div className="flex-1 lg:w-1/2 bg-gray-100 px-5 lg:px-24 py-8 lg:py-24 flex justify-center items-center">
                    <div>
                        <h2 className="text-2xl lg:text-[40px] leading-9 lg:leading-[48px] font-bold text-gray-0 mb-4">Can’t find the professional you are looking for??</h2>
                        <p className="text-gray-20 leading-7">All your payments are protected by a highly secure Escrow account. Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
                        <Button className="bg-primary-20 w-full lg:w-[238px] mt-8 px-10 py-6">Post a Job</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}