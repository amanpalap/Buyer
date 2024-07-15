import * as React from "react";
import Image from "next/image";
import a from '@/images/1-1@2x.png';
import b from '@/images/2-1@2x.png';
import c from '@/images/3-1@2x.png';
import { AppWindow } from 'lucide-react'


import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesPage() {
    const divitem = <div className="grid w-full items-center justify-center text-center gap-y-4">
        <div className="grid mx-auto"><AppWindow size={48} /></div>
        <h1>WEB DEVELOPMENT</h1>
        <p className="font-light text-sm">Web development is the work involved in developing a website for the Internet </p>
        <span><button className="text-sm text-red-500 bg-white w-40 py-2 mt-10">Read More &rarr; </button></span>
    </div>
    const items = [
        { imageSrc: a, text: divitem },
        { imageSrc: b, text: divitem },
        { imageSrc: c, text: divitem },
        { imageSrc: a, text: divitem },
        { imageSrc: b, text: divitem },
        { imageSrc: c, text: divitem },
        { imageSrc: a, text: divitem },
    ];

    return (
        <div className="grid items-center px-4 py-14 md:px-28 min-h-screen w-full bg-slate-100">
            <div className="w-full flex flex-wrap justify-center">
                <div className="text-start w-full">
                    <h2 className="text-red-500 text-lg mb-10 font-semibold ml-4">WHAT WE DO</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center p-4">
                        <h1 className="text-4xl font-bold">SERVICES PROVIDE FOR YOU</h1>
                        <p className="text-muted-foreground mt-4">
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid items-center justify-center w-full mt-10 bg-slate-100">
                <Carousel className="w-full max-w-screen-lg bg-slate-100">
                    <CarouselContent className="flex -ml-1 space-x-2 ">
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="flex-none bg-slate-100">
                                <div className="relative group w-80">
                                    <Image
                                        src={item.imageSrc}
                                        alt={`Service ${index + 1}`}
                                        className="rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-75"
                                    />
                                    <div className="absolute h-full inset-0 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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