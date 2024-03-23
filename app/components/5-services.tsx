"use client";
import data from "@/app/data/icons.js";
import Image from "next/image.js";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Services() {
    const [show, setShow] = useState(false);

    return (
        <div className="container px-5 lg:px-20 py-10 lg:py-16 lg:block text-center">
            <h2 className="text-center lg:text[28px] lg:text-3xl font-bold">Explore services by categories</h2>
            <div className="hidden lg:grid grid-cols-3 text-center lg:grid-cols-8 gap-8 gap-y-8 mt-12">
                {data.map((icon) => (
                    <div key={icon.id} className="flex flex-col gap-2 justify-center items-center">
                        <div className="rounded-[8px] p-4 border-2 border-gray-60">
                            <Image src={icon.src} alt={icon.name} width={24} height={24} />
                        </div>
                        <p className="text-sm text-center font-medium text-gray-10">{icon.name}</p>
                    </div>
                ))}
            </div>

            {/* MOBILE VERISON */}
            <div className="grid grid-cols-3 text-center lg:hidden lg:grid-cols-8 gap-8 gap-y-8 mt-12">
                {data.slice(0, 6).map((icon) => (
                    <div key={icon.id} className="flex flex-col gap-2 justify-center items-center">
                        <div className="rounded-[8px] p-4 border-2 border-gray-60">
                            <Image src={icon.src} alt={icon.name} width={24} height={24} />
                        </div>
                        <p className="text-sm text-center font-medium text-gray-10">{icon.name}</p>
                    </div>
                ))}
            </div>

            {show &&
                <div className="grid grid-cols-3 text-center lg:hidden lg:grid-cols-8 gap-8 gap-y-8 mt-8">
                    {data.slice(6).map((icon) => (
                        <div key={icon.id} className="flex flex-col gap-2 justify-center items-center">
                            <div className="rounded-[8px] p-4 border-2 border-gray-60">
                                <Image src={icon.src} alt={icon.name} width={24} height={24} />
                            </div>
                            <p className="text-sm text-center font-medium text-gray-10">{icon.name}</p>
                        </div>
                    ))}
                </div>
            }

                    <Button onClick={() => setShow(!show)} variant="outline" className="mt-10 inline-block lg:hidden w-[224px] h-[48px] text-primary-20 focus:text-primary-20 hover:bg-transparent font-bold rounded-md border-primary-20">
                        {show === true ? "Close" : "Show All categories"}
                    </Button>
                </div>
    )
}