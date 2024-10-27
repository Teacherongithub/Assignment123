import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='home'>
            <nav>
                <ul >
                    <li><Link href="/"><b>Home</b></Link></li>
                    <li><Link href="/"><b>About</b></Link></li>
                    <li><Link href="/"><b>Contact</b></Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar