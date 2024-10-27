import Link from 'next/link'

   
   const Navbar = () => {
     return (
       
        <nav className="bg-blue-900 text-gray-200 p-4">
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
    </nav>
       
     );
   };
   
   export default Navbar; 
