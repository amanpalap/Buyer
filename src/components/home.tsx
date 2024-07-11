import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen gap-4 text-black bg-white flex flex-wrap items-center justify-center">
      <div className="w-full items-center gap-10 justify-center mx-28 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-y-5 w-full justify-center">
          <h2 className="text-red-500 text-xl font-semibold mb-2">
            AWARD WINNING
          </h2>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            DIGITAL MARKETING AGENCY
          </h1>
          <p className="text-muted-foreground mb-6">
            Morbi sed lacus nec risus finibus feugiat at fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat at fermentum.
          </p>
          <Link className='bg-red-500 px-4 py-2 self-start rounded hover:text-white' href="/form">CONTACT US</Link>
        </div>
        <div className='grid items-center justify-center'>
          <img src="https://placehold.co/600x700" alt="Person working on a creative project" className="rounded-lg grid items-center justify-center shadow-lg" />
        </div>
      </div>
    </div>
  )
}
