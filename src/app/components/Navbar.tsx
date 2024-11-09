import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row max-w-screen-8xl h-20 justify-between items-center bg-blue-950 px-4 sm:px-8 py-2 space-y-2 sm:space-y-0 mx-auto">
      <h2 className="font-bold text-white text-xl">My Portfolio</h2>
      <ul className="flex  gap-4 sm:gap-8 list-none text-white">
        <li>
          <Link href="/home" className="hover:text-gray-300">Home
          </Link>
        </li>
         <li>
          <Link href="/about" className="hover:text-gray-300">About
           </Link>
         </li>
         <li>
          <Link href="/projects" className="hover:text-gray-300">Project
          </Link>
         </li>
        <li> 
          <Link href="/contact" className="hover:text-gray-300">Contact
          </Link>
        </li>
      </ul>
    </div>
  );
} 