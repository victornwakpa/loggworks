import data from "@/app/data/icons.js";
import Image from "next/image.js";

export default function Services() {
    return (
        <div className="container px-20 py-16 hidden lg:block">
            <h2 className="text-center text-3xl font-bold">Services  categories</h2>
            <div className="grid grid-cols-8 gap-8 gap-y-8 mt-12">
                {data.map((icon) => (
                    <div key={icon.id} className="flex flex-col gap-2 justify-center items-center">
                        <div className="rounded-[8px] p-4 border-2 border-gray-400">
                            <Image src={icon.src} alt={icon.name} width={24} height={24} />
                        </div>
                        <p className="text-sm text-center font-medium text-gray-10">{icon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}