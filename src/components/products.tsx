'use client'
import React, { useState } from 'react';
import { Clock, Trophy, CircleCheck, Heart } from 'lucide-react'; // Note the correct import for CircleCheck

export default function ProductPage() {
    const stats = [
        { Icon: Heart, count: "199+", label: "Satisfied Customers" },
        { Icon: Clock, count: "1591+", label: "Days Of Operation" },
        { Icon: CircleCheck, count: "283+", label: "Completed Projects" },
        { Icon: Trophy, count: "75+", label: "Awards Won" },
    ];

    return (
        <div className="w-full py-14 px-4 md:px-28 bg-slate-100">
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
    );
}