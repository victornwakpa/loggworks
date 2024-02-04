import tradesmen from "@/app/data/tradesmen";
import childcare from "@/app/data/childcare";
import entertainment from "@/app/data/entertainment";
import { Button } from "@/components/ui/button";
import Image from "next/image.js";
import { Plus } from 'lucide-react';

export default function SectionSix() {
    return (
        <div className="container px-5 lg:px-20 py-10 lg:py-16">
            <div className="flex flex-col gap-16">
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl lg:text-2xl font-bold">Tradesmen</h3>
                        <Button variant="ghost" className="text-primary-20">
                            <Plus className="inline-block w-5 mr-2" />
                            View all
                        </Button>
                    </div>

                    <div>
                        <div className="grid grid-flow-col auto-cols-max lg:auto-cols-fr overflow-x-auto scrollable-content gap-6 mt-4">
                            {tradesmen.map((trademan) => (
                                <div key={trademan.id} className="flex flex-col gap-3 justify-center">
                                    <Image src={trademan.src} alt={trademan.name} width={291} height={140} className="hidden lg:block"/>
                                    <Image src={trademan.src} alt={trademan.name} width={234} height={140} className="lg:hidden"/>
                                    <p className=" text-gray-10 font-medium">{trademan.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl lg:text-2xl font-bold">Childcare</h3>
                        <Button variant="ghost" className="text-primary-20">
                            <Plus className="inline-block w-5 mr-2" />
                            View all
                        </Button>
                    </div>

                    <div>
                        <div className="grid grid-flow-col auto-cols-max lg:auto-cols-fr overflow-x-auto scrollable-content gap-6 mt-4">
                            {childcare.map((childcare) => (
                                <div key={childcare.id} className="flex flex-col gap-3 justify-center">
                                    <Image src={childcare.src} alt={childcare.name} width={291} height={140} className="hidden lg:block" />
                                    <Image src={childcare.src} alt={childcare.name} width={234} height={140} className="lg:hidden" />
                                    <p className=" text-gray-10 font-medium">{childcare.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl lg:text-2xl font-bold">Entertainment</h3>
                        <Button variant="ghost" className="text-primary-20">
                            <Plus className="inline-block w-5 mr-2" />
                            View all
                        </Button>
                    </div>

                    <div>
                        <div className="grid grid-flow-col auto-cols-max lg:auto-cols-fr overflow-x-auto scrollable-content gap-6 mt-4">
                            {entertainment.map((entertainment) => (
                                <div key={entertainment.id} className="flex flex-col gap-3 justify-center">
                                    <Image src={entertainment.src} alt={entertainment.name} width={291} height={140} className="hidden lg:block" />
                                    <Image src={entertainment.src} alt={entertainment.name} width={234} height={140} className="lg:hidden" />
                                    <p className=" text-gray-10 font-medium">{entertainment.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}