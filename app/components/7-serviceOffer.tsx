import Image from "next/image";
import OuterImage from "@/public/assets/image-2.png";
import innerImage from "@/public/assets/image-1.1.png";
import { Button } from "@/components/ui/button";

export default function ServiceOfferR() {
    return (
        <div className="container px-20 py-16 hidden lg:block">
            <div className="flex flex-row-reverse rounded-lg overflow-hidden">
                <div className="relative w-1/2">
                    <Image src={OuterImage} alt="outer image" className="w-full h-full" />
                    <Image src={innerImage} alt="inner image" className="absolute bottom-4 right-4" />
                </div>

                <div className="flex-1 w-1/2 bg-gray-100 px-24 py-20 flex justify-center items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-0 mb-4">Can’t find the professional you are looking for??</h2>
                        <p className="text-gray-20">All your payments are protected by a highly secure Escrow account. Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
                        <Button className="bg-primary-20 mt-8 px-10 py-6">Post a Job</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}