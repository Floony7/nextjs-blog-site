"use client"

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const NavLink = styled(Link)`
  margin: 0 0.5em;
  padding: 0 0.5em;
`;

const Navbar = () => {
  return (
      <div className="flex justify-center py-4 px-2 text-white rounded">
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/articles'>Articles</NavLink>
        <NavLink href='/book-reviews'>Book Reviews</NavLink>
        <NavLink href='/about'>About</NavLink>
      </div>
  )
}

export default Navbar;