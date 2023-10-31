"use client"

import Image from 'next/image'
import Navbar from './components/navbar'
import styled from 'styled-components';
import Card from './components/card';

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 75vw;
  margin: 2rem auto;
  gap: 0.5rem;
`;

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <header className='w-full header'>      
      <div className='w-3/4 mx-auto flex justify-between content-center'>
        <p className='text-xl pt-3'>Higher Mind</p>
      <Navbar />
      </div>
      </header>
      <MainGrid>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nobis repudiandae! Ut expedita rem atque quibusdam velit voluptas repellendus, obcaecati, officia eaque cum, nostrum doloribus. Dolores aliquam ipsa repellat hic!</p></div>
        <div>
        <h3 className="text-2xl pb-2 ps-2">Recent Posts</h3>
        <Card /><Card /><Card />
          </div>
      </MainGrid>
    </div>
  )
}
