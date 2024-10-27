
import React from 'react'
import Link from 'next/link'


function HomePage() {
  return (
    <div>
            <li>
            <Link href={"/"}>Navbar</Link>
            </li>
            <li>
            <Link href={"/"}>Footer</Link>
            </li>
            <li>
            <Link href={"/"}>HomeHero</Link>
            </li>
    </div> 
  
  );
}

export default HomePage;