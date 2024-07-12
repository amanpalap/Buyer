import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesPage() {
    const ratio = 1 / 4;
    const items = [
        { imageSrc: "https://placehold.co/300x450", text: "Service 1" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 2" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 3" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 4" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 5" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 6" },
        { imageSrc: "https://placehold.co/300x450", text: "Service 7" },
    ];

    return (
        <div className="grid items-center px-28 py-14 justify-center min-h-screen w-full">
            <div className="w-full flex flex-wrap justify-center">
                <div className="text-start w-full">
                    <h2 className="text-red-500 text-lg mb-10 font-semibold ml-4" >WHAT WE DO</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center p-4">
                        <h1 className="text-4xl font-bold">SERVICES PROVIDE FOR YOU</h1>
                        <p className="text-muted-foreground mt-4">
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid items-center justify-center w-full mt-10">
                <Carousel className="bg-white">
                    <CarouselContent className="flex -ml-1 space-x-2">
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="flex-none">
                                <div className="relative group">
                                    <img src={item.imageSrc} alt={`Service ${index + 1}`} className="rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-0" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        {item.text}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}