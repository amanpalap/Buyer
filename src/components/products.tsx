'use client'
import React, { useState } from 'react';
import { Clock, Trophy, CircleCheckBig, Heart } from 'lucide-react';

export default function ProductPage() {
    const [imageSrc, setImageSrc] = useState('https://placehold.co/550x400?text=Image+1');
    const [selectedBlock, setSelectedBlock] = useState(0);

    const handleImageChange = (newSrc: React.SetStateAction<string>, index: React.SetStateAction<number>) => {
        setImageSrc(newSrc);
        setSelectedBlock(index);
    };

    return (
        <div className="w-full py-14 px-28">
            <div className="text-center w-full mb-10">
                <p className="text-accent text-xl font-semibold text-red-500 mb-6">EXPERTS GROWTH</p>
                <h2 className="text-3xl font-bold">OUR COMPANY GROWTH</h2>
            </div>
            <div className="flex justify-center w-full px-28 space-x-4">
                <div className="bg-card w-1/5 p-6 hover:scale-110 hover:bg-red-500 hover:text-white transition-scale duration-300 rounded-lg shadow-lg">
                    <div className="flex flex-col gap-y-2 items-center">
                        <Heart strokeWidth={3} absoluteStrokeWidth />
                        <p className="text-4xl font-bold">199 +</p>
                        <p className="">Statified Customers</p>
                    </div>
                </div>
                <div className="bg-card w-1/5 p-6 hover:scale-110 hover:bg-red-500 hover:text-white transition-scale duration-300 rounded-lg shadow-lg">
                    <div className="flex flex-col gap-y-2 items-center">
                        <Clock strokeWidth={3} />
                        <p className="text-4xl font-bold">1591+</p>
                        <p className="">Days Of Operation</p>
                    </div>
                </div>
                <div className="bg-card w-1/5 p-6 hover:scale-110 hover:bg-red-500 hover:text-white transition-scale duration-300 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center gap-y-2">
                        <CircleCheckBig strokeWidth={3} />
                        <p className="text-4xl font-bold">283 +</p>
                        <p className="">Complete Project</p>
                    </div>
                </div>
                <div className="bg-card w-1/5 p-6 hover:scale-110 hover:bg-red-500 hover:text-white transition-scale duration-300 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center gap-y-2">
                        <Trophy strokeWidth={3} />
                        <p className="text-4xl font-bold">75+</p>
                        <p className="">Win Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}