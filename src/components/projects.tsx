'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import a from '@/images/image@2x.png'
import b from '@/images/1.jpg'
import c from '@/images/2.jpg'
import { Crosshair, Trophy, ShieldCheck, Gauge, Icon } from 'lucide-react'; // Note the correct import for CircleCheck


// Project data
const projects = [
    {
        title: "Genderless Kei - Japan's Hot",
        text: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        imgSrc: a,
    },
    {
        title: "Better Strategy & Quality",
        text: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        imgSrc: b,
    },
    {
        title: "Genderless Kei - Japan's Hot",
        text: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        imgSrc: c,
    },
];

export default function ProjectsPage() {



    const [imageSrc, setImageSrc] = useState(projects[0].imgSrc);
    const [selectedBlock, setSelectedBlock] = useState(0);

    const handleImageChange = (newSrc: React.SetStateAction<StaticImageData>, index: React.SetStateAction<number>) => {
        setImageSrc(newSrc);
        setSelectedBlock(index);
    };

    return (
        <div className="flex flex-wrap w-full items-center min-h-screen py-10 px-4 md:px-28">
            <div className="w-full pb-10 md:px-28">
                <div className="text-center w-full mb-10">
                    <p className="text-xl font-semibold text-red-500 mb-6">WHY CHOOSE US</p>
                    <h2 className="text-3xl font-bold">WHY WE ARE BEST</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full">
                    <div className="w-full justify-center px-auto flex flex-wrap gap-x-10">
                        <div className="flex w-1/6 flex-col gap-y-2 ">
                            <Image src="/1.svg" width="100" height="100" alt='1' className='w-14 h-14'></Image>
                            <p className="text-sm font-semibold">Clarified Vision & Target</p>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sunt!</p>
                        </div>
                        <div className="flex flex-col gap-y-2 w-1/6">
                            <Image src="/2.svg" width="100" height="100" alt='1' className='w-14 h-14' ></Image>
                            <p className="text-sm font-semibold">High Performance</p>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sunt!</p>
                        </div>
                        <div className="flex flex-col gap-y-2 w-1/6">
                            <Image src="/3.svg" width="100" height="100" alt='1' className='w-14 h-14'></Image>
                            <p className="text-sm font-semibold">Clarified Vision & Target</p>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sunt!</p>
                        </div>
                        <div className="flex flex-col gap-y-2 w-1/6">
                            <Image src="/4.svg" width="100" height="100" alt='1' className='w-14 h-14' ></Image>
                            <p className="text-sm font-semibold">High Performance</p>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sunt!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-red-500 w-full text-xl text-center mb-4 font-semibold uppercase">Our Projects</p>
                <h2 className="text-4xl w-full font-bold text-center mb-8">Why We Are Best</h2>
                <div className="flex flex-wrap gap-x-8 w-full items-center justify-center">
                    <div className='w-2/4'>
                        <Image
                            src={imageSrc}
                            alt="Project Display"
                            className="w-xl h-96 border-2"
                        />
                    </div>
                    <div className="w-1/4 bg-slate-200">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`py-6 h-32 px-4 shadow-md cursor-pointer ${selectedBlock === index ? 'bg-red-500 text-white' : 'bg-slate-100'}`}
                                onClick={() => handleImageChange(project.imgSrc, index)}
                            >
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className={`text-gray-600 ${selectedBlock === index ? 'text-white' : ''}`}>{project.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}