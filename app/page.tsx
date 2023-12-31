"use client"

import Image from 'next/image'
import Navbar from './components/navbar'
import Card from './components/card';
import CardFullWidth from './components/card-full-width';
import { MainGrid } from './components/styled';

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <header className='w-full header'>      
      <div className='w-3/4 mx-auto flex justify-between content-center'>
     <a href="/">
     <Image
      src="/assets/site-logo.png"
      width={200}
      height={50}
      alt="Higher Mind"
    />
     </a>
      <Navbar />
      </div>
      </header>
      <MainGrid>
        <section className="bg-white">
          <CardFullWidth />
          <CardFullWidth />
          <CardFullWidth />
        </section>
        <div>
        <h3 className="text-2xl pb-2 ps-2">Recent Posts</h3>
        <Card /><Card /><Card />
          </div>
      </MainGrid>
    </div>
  )
}
