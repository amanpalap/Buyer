'use client'
import React, { useState } from 'react';
import { Clock, Trophy, CircleCheck, Heart } from 'lucide-react'; // Note the correct import for CircleCheck
import Image from 'next/image';

export default function ProductPage() {
    const stats = [
        { Icon: Heart, count: "199+", label: "Satisfied Customers" },
        { Icon: Clock, count: "1591+", label: "Days Of Operation" },
        { Icon: CircleCheck, count: "283+", label: "Completed Projects" },
        { Icon: Trophy, count: "75+", label: "Awards Won" },
    ];

    return (
        <div className="w-full bg-white">
            <div className='bg-slate-100 py-20'>
                <div className="text-center w-full mb-10">
                    <p className="text-xl font-semibold text-red-500 mb-6">EXPERTS GROWTH</p>
                    <h2 className="text-3xl font-bold">OUR COMPANY GROWTH</h2>
                </div>
                <div className="flex flex-wrap justify-center w-full px-4 md:px-28 space-x-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white w-full md:w-1/5 p-6 mb-4 md:mb-0 hover:scale-110 hover:bg-red-500 hover:text-white transition-transform duration-300 rounded-lg shadow-lg"
                        >
                            <div className="flex flex-col items-center gap-y-2">
                                <stat.Icon strokeWidth={3} />
                                <p className="text-4xl font-bold">{stat.count}</p>
                                <p className='text-sm font-semibold'>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center w-full my-20 bg-white gap-y-5 flex flex-wrap justify-center">
                <p className="text-xl w-full font-semibold text-red-500 mb-6">CLIENT'S FEEDBACK</p>
                <h2 className="text-3xl w-full font-bold mb-8">PEOPPLE SAY'S ABOUT US</h2>
                <div className='w-2/5'>
                    <Image className='ml-5' src={'/Quote.png'} alt={'"'} width={'50'} height={'100'}></Image>
                    <p className='-mt-6'>Jannat Tumpa the standard chunk of Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus voluptates porro? Mollitia</p></div>
                <div className="text-lg font-thin mb-6 w-full"><span className='text-lg font-semibold text-red-500'>JANNAT TUMPA</span>- COO, AMERIMAR ENTERPRISES, INC</div>
            </div>
            <div className='h-72 grid  items-center justify-center w-full bg-red-600'>
                <Image src={'/Group.png'} alt={'group 500'} width={'1000'} height={'20'}></Image>
            </div>
        </div>
    );
}