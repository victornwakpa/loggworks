import Image from "next/image";
import Privacy from "@/public/assets/Privacy.png";
import Payment from "@/public/assets/Payment.png";
import Trusted from "@/public/assets/Trusted.png";

export default function Secured(){
    return (
        <div className="container px-20 py-16">
            <h2 className="text-3xl font-bold mb-12">Secured payment and privacy on Loggworks</h2>
            <div className="flex justify-between gap-6">
                <div className="flex-1">
                    <Image src={Privacy} alt="Privacy icon" className="w-16" />
                    <div className="mt-6">
                        <h3 className="font-bold mb-3 text-lg">Privacy Protection</h3>
                        <p className="text-base">You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <Image src={Payment} alt="Payment icon" className="w-16" />
                    <div className="mt-6">
                        <h3 className="font-bold mb-3 text-lg">Payment Protection.</h3>
                        <p className="text-base">All your payments are protected by a highly secure Escrow account. Pay in advance or on completion with just a few clicks of a button, whenever you want.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <Image src={Trusted} alt="Trusted icon" className="w-16" />
                    <div className="mt-6">
                        <h3 className="font-bold mb-3 text-lg">Trusted Professionals.</h3>
                        <p>We use the Self-Employed Quality Control Scheme (SEQCS) to comprehensively screen all home service professionals on Loggworks — for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}