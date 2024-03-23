import Image from "next/image";
import Privacy from "@/public/assets/Privacy.png";
import Payment from "@/public/assets/Payment.png";
import Trusted from "@/public/assets/Trusted.png";

export default function Secured(){
    return (
        <div className="container px-5 lg:px-20 py-8 lg:py-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-gray-0">Secured payment and privacy on Loggworks</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1">
                    <Image src={Privacy} alt="Privacy icon" className="w-16" />
                    <div className="mt-7">
                        <h3 className="font-bold mb-3 text-[20px] text-gray-10">Privacy Protection</h3>
                        <p className="text-base text-gray-20 leading-[26px]">You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <Image src={Payment} alt="Payment icon" className="w-16" />
                    <div className="mt-7">
                        <h3 className="font-bold mb-3 text-[20px] text-gray-10">Payment Protection.</h3>
                        <p className="text-base text-gray-20 leading-[26px]">All your payments are protected by a highly secure Escrow account. Pay in advance or on completion with just a few clicks of a button, whenever you want.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <Image src={Trusted} alt="Trusted icon" className="w-16" />
                    <div className="mt-7">
                        <h3 className="font-bold mb-3 text-[20px] text-gray-10">Trusted Professionals.</h3>
                        <p className="text-base text-gray-20 leading-[26px]">We use the Self-Employed Quality Control Scheme (SEQCS) to comprehensively screen all home service professionals on Loggworks — for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}