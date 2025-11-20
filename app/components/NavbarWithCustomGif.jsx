'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarWithCustomGif() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    'NEW DROP - NOW LIVE',
    'FREE SHIPPING ON ORDERS ABOVE ₹2999',
    'SHOP THE LATEST COLLECTION',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Banner with Rotating Text */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="relative h-6">
          {rotatingTexts.map((text, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                index === currentTextIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              <p className="text-xs tracking-widest font-light">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className=" mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 z-10">
              <h1 className="font-serif text-3xl italic text-black">Bluorng</h1>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link
                href="/new-in"
                className="text-xs tracking-wide text-black hover:text-gray-500 transition-colors"
              >
                NEW IN
              </Link>
              <Link
                href="/apparel"
                className="text-xs tracking-wide text-black hover:text-gray-500 transition-colors"
              >
                APPAREL
              </Link>
              <Link
                href="/stores"
                className="text-xs tracking-wide text-black hover:text-gray-500 transition-colors"
              >
                STORES
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6 z-10">
              <button className="hidden md:block text-xs tracking-wide text-black hover:text-gray-500 transition-colors">
                SEARCH
              </button>
              <button className="hidden md:block text-xs tracking-wide text-black hover:text-gray-500 transition-colors">
                LOGIN
              </button>
              
              {/* Animated GIF Icon - Brand Logo */}
              <Link href="/cart" className="relative">
                <div className="w-18 h-18 bg-transparent flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/new.webp"
                    alt="Brand Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}