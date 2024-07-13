'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import a from '@/images/image@2x.png'
import { Crosshair, Trophy, ShieldCheck, Gauge } from 'lucide-react'; // Note the correct import for CircleCheck


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
        imgSrc: a,
    },
    {
        title: "Genderless Kei - Japan's Hot",
        text: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        imgSrc: a,
    },
];

export default function ProjectsPage() {



    const [imageSrc, setImageSrc] = useState(projects[0].imgSrc);
    const [selectedBlock, setSelectedBlock] = useState(0);

    const handleImageChange = (newSrc, index) => {
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
                    {[
                        { Icon: Crosshair, Heading: "Clarified Vision & Target", text: "Satisfied Customers" },
                        { Icon: Gauge, Heading: "High Performance", text: "Days Of Operation" },
                        { Icon: ShieldCheck, Heading: "Maintain Security", text: "Complete Projects" },
                        { Icon: Trophy, Heading: "Better Strategy & Quality", text: "Win Awards" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white w-1/4 p-6 mb-4"
                        >
                            <div className="flex flex-col w-full gap-y-2">
                                <item.Icon strokeWidth={1} size={50} />
                                <p className="text-sm">{item.Heading}</p>
                                <p className='text-sm'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-red-500 w-full text-xl text-center font-semibold uppercase">Our Projects</p>
                <h2 className="text-4xl w-full font-bold text-center mb-8">Why We Are Best</h2>
                <div className="flex flex-wrap gap-x-8 w-full items-center h-fit justify-center">
                    <div className='w-2/4'>
                        <Image
                            src={imageSrc}
                            alt="Project Display"
                            className="w-full"
                        />
                    </div>
                    <div className="w-1/4 bg-slate-200">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`py-6 px-4 shadow-md cursor-pointer ${selectedBlock === index ? 'bg-red-500 text-white' : 'bg-slate-100'}`}
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