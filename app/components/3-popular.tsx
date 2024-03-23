import Image from "next/image";

const imageList = [
    {
        id: 1,
        name: "Electrician",
        src: "/assets/1-electrician.png"
    },
    {
        id: 2,
        name: "Childminders",
        src: "/assets/2-childminder.png"
    },
    {
        id: 3,
        name: "Carpenters",
        src: "/assets/3-carpenter.png"
    },
    {
        id: 4,
        name: "Cleaners",
        src: "/assets/4-cleaner.png"
    },
    {
        id: 5,
        name: "Care Worker",
        src: "/assets/5-careworker.png"
    },
    {
        id: 6,
        name: "Cooks",
        src: "/assets/6-cook.png"
    },
];

export default function Popular() {
    return (
        <div className="bg-primary-100">
            <div className="container px-5 lg:px-20 pt-10 pb-12 lg:py-16">
                <h2 className="text-xl lg:text-[32px] font-bold text-black">Explore popular services</h2>

                <div className="grid grid-flow-col auto-cols-max lg:auto-cols-fr gap-6 overflow-x-auto scrollable-content mt-8 lg:mt-12">
                    {imageList.map((image) => (
                        <div key={image.id} className="relative flex w-fit rounded-lg overflow-hidden">
                            <Image src={image.src} alt={image.name} width={187} height={280} />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-[100px]"></div>

                            <p className="text-white text-[18px] absolute bottom-3 font-medium left-2">{image.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}