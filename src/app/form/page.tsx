'use client';
import React, { useState } from 'react';

export default function HomePage() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => {
        setter(e.target.value);
    };

    return (
        <div className="w-full flex flex-wrap justify-center items-center min-h-screen bg-slate-200 text-black">
            <div className="max-w-md bg-white mx-auto p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Talk to us</h2>
                <form className="gap-y-5 grid" action="https://getform.io/f/bvrerrwb" method="POST">
                    <div className="relative mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => handleInputChange(e, setEmail)}
                            className="mt-1 w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-primary"
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-3 top-2 transition-all ${
                                email ? '-translate-y-6 text-xs text-gray-500' : 'transform-none text-sm text-gray-400'
                            }`}
                        >
                            Work email
                        </label>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                value={firstName}
                                onChange={(e) => handleInputChange(e, setFirstName)}
                                className="mt-1 w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-primary"
                                required
                            />
                            <label
                                htmlFor="first-name"
                                className={`absolute left-3 top-2 transition-all ${
                                    firstName ? '-translate-y-6 text-xs text-gray-500' : 'transform-none text-sm text-gray-400'
                                }`}
                            >
                                First name
                            </label>
                        </div>
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                                value={lastName}
                                onChange={(e) => handleInputChange(e, setLastName)}
                                className="mt-1 w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-primary"
                                required
                            />
                            <label
                                htmlFor="last-name"
                                className={`absolute left-3 top-2 transition-all ${
                                    lastName ? '-translate-y-6 text-xs text-gray-500' : 'transform-none text-sm text-gray-400'
                                }`}
                            >
                                Last name
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="focus:ring-primary h-4 w-4 text-primary border-input rounded"
                                required
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-muted-foreground">
                                I agree to Fyle's terms and conditions, and provide consent to send me communication.
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                        >
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}