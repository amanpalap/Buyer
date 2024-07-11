'use client'
import React, { useState } from 'react';

export default function ProductPage() {
    const [imageSrc, setImageSrc] = useState('https://placehold.co/550x400?text=Image+1');
    const [selectedBlock, setSelectedBlock] = useState(0);

    const handleImageChange = (newSrc, index) => {
        setImageSrc(newSrc);
        setSelectedBlock(index);
    };

    return (
        <div class="bg-background text-foreground py-10">
            <div class="text-center mb-6">
                <p class="text-accent mb-2">EXPERTS GROWTH</p>
                <h2 class="text-3xl font-bold">OUR COMPANY GROWTH</h2>
            </div>
            <div class="flex justify-center space-x-4">
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <div class="flex flex-col items-center">
                        <img aria-hidden="true" alt="heart-icon" src="https://openui.fly.dev/openui/24x24.svg?text=❤️" class="mb-2" />
                        <p class="text-4xl font-bold">199 +</p>
                        <p class="text-muted-foreground">Statified Customers</p>
                    </div>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <div class="flex flex-col items-center">
                        <img aria-hidden="true" alt="clock-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🕒" class="mb-2" />
                        <p class="text-4xl font-bold">1591+</p>
                        <p class="text-muted-foreground">Days Of Operation</p>
                    </div>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <div class="flex flex-col items-center">
                        <img aria-hidden="true" alt="check-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" class="mb-2" />
                        <p class="text-4xl font-bold">283 +</p>
                        <p class="text-muted-foreground">Complete Project</p>
                    </div>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <div class="flex flex-col items-center">
                        <img aria-hidden="true" alt="trophy-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🏆" class="mb-2" />
                        <p class="text-4xl font-bold">75+</p>
                        <p class="text-muted-foreground">Win Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}