'use client'
import React, { useState } from 'react';

export default function ProjectsPage() {
    const [imageSrc, setImageSrc] = useState('https://placehold.co/550x400?text=Image+1');
    const [selectedBlock, setSelectedBlock] = useState(0);

    const handleImageChange = (newSrc, index) => {
        setImageSrc(newSrc);
        setSelectedBlock(index);
    };

    return (
        <div className="flex flex-wrap items-center min-h-screen py-10 px-28">
            <p className="text-red-500 w-full text-center mt-10 font-semibold uppercase">Our Project</p>
            <h2 className="text-4xl w-full font-bold text-center ">Why We Are Best</h2>
            <div className="flex flex-wrap w-full gap-x-4 h-max md:flex-row items-center md:items-start">
                <div className='w-3/5 h-max'>
                    <img
                        src={imageSrc}
                        alt="Display"
                        className="w-full mb-6 md:mb-0 md:mr-6"
                    />
                </div>
                <div className="w-1/4 bg-slate-200 h-max">
                    <div
                        className={`p-4 shadow-md cursor-pointer ${selectedBlock === 0 ? 'bg-red-500 text-white' : 'bg-white'}`}
                        onClick={() => handleImageChange('https://placehold.co/550x400?text=Image+1', 0)}
                    >
                        <h3 className="text-lg font-semibold">Genderless Kei - Japan's Hot</h3>
                        <p className={`text-gray-600 ${selectedBlock === 0 ? 'text-white' : ''}`}>Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
                    </div>
                    <div
                        className={`p-4 shadow-md cursor-pointer ${selectedBlock === 1 ? 'bg-red-500 text-white' : 'bg-white'}`}
                        onClick={() => handleImageChange('https://placehold.co/550x400?text=Image+2', 1)}
                    >
                        <h3 className="text-lg font-semibold">Better Strategy & Quality</h3>
                        <p className={`text-gray-600 ${selectedBlock === 1 ? 'text-white' : ''}`}>Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
                    </div>
                    <div
                        className={`p-4 shadow-md cursor-pointer ${selectedBlock === 2 ? 'bg-red-500 text-white' : 'bg-white'}`}
                        onClick={() => handleImageChange('https://placehold.co/550x400?text=Image+3', 2)}
                    >
                        <h3 className="text-lg font-semibold">Genderless Kei - Japan's Hot</h3>
                        <p className={`text-gray-600 ${selectedBlock === 2 ? 'text-white' : ''}`}>Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
                    </div>
                    <div
                        className={`p-4 shadow-md cursor-pointer ${selectedBlock === 3 ? 'bg-red-500 text-white' : 'bg-white'}`}
                        onClick={() => handleImageChange('https://placehold.co/550x400?text=Image+4', 3)}
                    >
                        <h3 className="text-lg font-semibold">Genderless Kei - Japan's Hot</h3>
                        <p className={`text-gray-600 ${selectedBlock === 2 ? 'text-white' : ''}`}>Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
                    </div>
                </div>
            </div>
        </div>
    );
}