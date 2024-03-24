import Image from "next/image";
import ui from "@/public/assets/ui.png";
import { Button } from "@/components/ui/button";

export default function BottomBanner() {
    return (
        <div className="container px-5 lg:px-20 py-16">
            <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden bg-[#2E2E2E]">
                <div className="relative lg:w-1/2 flex justify-center items-center pt-8 lg:pt-16 px-10 lg:px-0">
                    <Image src={ui} alt="phone app image" className="" />
                </div>

                <div className="flex-1 w-50% px-5 lg:px-24 py-10 lg:py-20 flex justify-center items-center">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Access Loggworks on your mobile phone</h2>
                        <p className="text-gray-70">Enjoy the full experience of Loggworks on our mobile app. What’s more? You get to enjoy all of our services convieniently. </p>
                        <Button className="bg-gray-60 hover:bg-gray-60 w-full lg:w-fit font-semibold text-gray-30 mt-8 px-10 py-6">Coming soon</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}