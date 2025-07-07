'use client';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-4">© 2025. All rights reserved.</p>

        <div className="mb-4">
          <Link href="/home" className="text-gray-400 hover:text-gray-200 mx-2">Home</Link>
          <Link href="/about" className="text-gray-400 hover:text-gray-200 mx-2">About</Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-200 mx-2">Contact</Link>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="https://github.com/eshaidrees" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
            <FiGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
            <FiLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




// import { FiGithub, FiLinkedin } from 'react-icons/fi';

// function Footer() {
//     return (
//         <footer className="bg-gray-800 text-gray-200 py-6">
//             <div className="container mx-auto px-4 text-center">
//              <p className="text-sm mb-4">© Esha 2024. All rights reserved.</p>

//                 <div className="mb-4">
//                     <a href="home" className="text-gray-400 hover:text-gray-200 mx-2">Home</a>
//                     <a href="about" className="text-gray-400 hover:text-gray-200 mx-2">About</a>
//                     <a href="contact" className="text-gray-400 hover:text-gray-200 mx-2">Contact</a>
//                 </div>

//                 <div className="flex justify-center space-x-4">
//                     <a href="https://github.com/eshaidrees" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
//                         <FiGithub className="h-6 w-6" />
//                     </a>
//                     <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
//                         <FiLinkedin className="h-6 w-6" />
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;