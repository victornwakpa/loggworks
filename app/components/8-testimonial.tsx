import trustscore from "@/public/assets/trust-score.png";
import Image from "next/image";
import data from "@/app/data/data.js";

export default function Testimonial() {
    return (
        <div className="bg-primary-90">
            <div className="container px-5 lg:pl-20 py-10 lg:py-20 hidden lg:block">
                <h2 className="text-3xl font-bold text-center">We’re trusted by many across the UK</h2>
                <div className="flex gap-5 mt-12">
                    <div className="w-1/4 flex items-center">
                        <Image src={trustscore} alt="trustscore" />
                    </div>
                    <div className="grid grid-flow-col scroll-bar auto-cols-min overflow-x-auto w-3/4 lg:gap-5 gap-4 mt-4 pb-6">
                        {data.map((testimonial, id) => (
                            <div key={testimonial.id} className="p-5 flex flex-col justify-between bg-white rounded-lg w-[400px] h-[210px]">
                                <p className="mb-3">{testimonial.message}</p>
                                <div className="flex gap-2 items-center rounded-lg">
                                    <Image src={testimonial.avatar} alt="image showing sign up" className="rounded-full" width={32} height={32} />
                                    <p className="block font-medium text-lg">{testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}