import areas from "@/app/data/area";

export default function Area() {
    return (
        <div className="container px-20 py-16  hidden lg:block">
            <h2 className="text-2xl font-bold">View Home service professionals in your area.</h2>
            <div className="grid grid-cols-6 gap-y-6 mt-12">
                {areas.map((area) => (
                    <div key={area.id} className="flex flex-col">
                        <p className="text-sm font-medium text-gray-20">{area.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}