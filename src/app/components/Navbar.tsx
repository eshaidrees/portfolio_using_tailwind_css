'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  };

  const links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    {href: '/skills' , label: 'Skills'},
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:to-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold">My Portfolio</Link>
        <div className="hidden md:flex gap-6 text-white">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className={`${pathname === link.href ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'}`}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme}>
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 text-white bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:to-gray-800">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`block py-2 ${pathname === link.href ? 'text-yellow-300 font-semibold' : 'hover:text-gray-300'}`}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} className="mt-2">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}



// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="flex flex-col sm:flex-row max-w-screen-8xl h-20 justify-between items-center bg-blue-950 px-4 sm:px-8 py-2 space-y-2 sm:space-y-0 mx-auto">
//       <h2 className="font-bold text-white text-xl"> <Link href="/">My Portfolio</Link></h2>
//       <ul className="flex  gap-4 sm:gap-8 list-none text-white">
//         <li>
//           <Link href="/home" className="hover:text-gray-300">Home
//           </Link>
//         </li>
//          <li>
//           <Link href="/about" className="hover:text-gray-300">About
//            </Link>
//          </li>
//          <li>
//           <Link href="/projects" className="hover:text-gray-300">Project
//           </Link>
//          </li>
//         <li> 
//           <Link href="/contact" className="hover:text-gray-300">Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// } 