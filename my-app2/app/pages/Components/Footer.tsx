import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-pink-400 text-blue-900 py-4 text-center">
        <p>Copyright © 2024</p>
        <ul>
                <li>
                <Link href={"/"}>Home</Link>
                </li>
                <li>
                <Link href={"/"}>About</Link>
                </li>
                <li>
                <Link href={"/"}>Contact</Link>
                </li>
            
    
        </ul>
    </footer> 
    );
  };
  
  export default Footer;