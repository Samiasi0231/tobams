'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-2 py-4" style={{ backgroundColor: "#060714" }}>
      {/* Logo */}
      <h1>
        <Image src="/Frame.png" alt="Logo"width={40} height={40}/>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
        <Link href="/auctions" className="text-gray-400 hover:text-white">Auctions</Link>
        <Link href="/discover" className="text-gray-400 hover:text-white">Discover</Link>
        <Link href="/community" className="text-gray-400 hover:text-white">Community</Link>
      </nav>

      {/* Mobile Navigation Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent menu from closing immediately
            setIsMenuOpen((prev) => !prev);
          }}
          className="menu-toggle text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mobile-menu absolute top-16 left-0 right-0 bg-white text-center p-4 shadow-lg md:hidden z-50 hover:bg-transparent" style={{ backgroundColor: "#060714" }}>
          <Link href="/" className="block py-2 text-gray-600 hover:text-black">Home</Link>
          <Link href="/auctions" className="block py-2 text-gray-600 hover:text-black">Auctions</Link>
          <Link href="/discover" className="block py-2 text-gray-600 hover:text-black">Discover</Link>
          <Link href="/community" className="block py-2 text-gray-600 hover:text-black">Community</Link>

          {/* Mobile Account Buttons */}
          <div className="mt-4">
            <button className="w-full bg-purple-600 px-4 py-2 rounded-md text-white mb-2">My Account</button>
            <button className="w-full bg-blue-600 px-4 py-2 rounded-md text-white">Contact</button>
          </div>
        </nav>
      )}

      {/* Desktop Account Buttons */}
      <div className="hidden md:flex">
        <button className="px-2 py-2 mr-2 rounded-md text-white">Contact</button>
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white">My Account</button>
      </div>
    </header>
  );
}
