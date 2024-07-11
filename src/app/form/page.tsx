import React from 'react'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className='w-full flex flex-wrap justify-center items-center min-h-screen bg-slate-200 text-black'>
            <div className="max-w-md bg-white mx-auto bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Talk to us</h2>
                <form className='gap-y-5 grid' action="https://getform.io/f/bvrerrwb" method="POST">
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Work email'
                            className="mt-1 block w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm"
                            required
                        />
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder='first name'
                                className="mt-1 block w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm"
                                required
                            />
                        </div>
                        <div className="w-1/2">

                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                                placeholder='last name'
                                className="mt-1 block w-full px-3 py-2 border-b rounded-md shadow-sm sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input id="terms" name="terms" type="checkbox" className="focus:ring-primary h-4 w-4 text-primary border-input rounded" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-muted-foreground">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-red-500 py-2 px-4 rounded-md hover:text-white">
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}