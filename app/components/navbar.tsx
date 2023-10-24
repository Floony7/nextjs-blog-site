"use client"

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
      <div className="bg-slate-500 flex justify-around w-2/3 py-2 px-2 my-2 text-white rounded">
        <Link href='/'>Home</Link>
        <Link href='/articles'>Articles</Link>
        <Link href='/book-reviews'>Book Reviews</Link>
        <Link href='/about'>About</Link>
      </div>
  )
}

export default Navbar;