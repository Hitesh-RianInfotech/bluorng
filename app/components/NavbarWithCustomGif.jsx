'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarWithCustomGif() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, [rotatingTexts.length]);

  const navLinks = [
    { href: '/new-in', label: 'NEW IN' },
    { href: '/apparel', label: 'APPAREL' },
    { href: '/stores', label: 'STORES' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Banner with Rotating Text */}
      <div className="bg-black text-white py-1.5 sm:py-2 overflow-hidden">
        <div className="relative h-5 sm:h-6">
          {rotatingTexts.map((text, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                index === currentTextIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              <p className="text-[10px] sm:text-xs tracking-widest font-light px-2 text-center">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 z-10">
              <h1 className="font-serif text-2xl sm:text-3xl italic text-black">Bluorng</h1>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wide text-black hover:text-gray-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3 sm:space-x-6 z-10">
              <button className="hidden md:block text-xs tracking-wide text-black hover:text-gray-500 transition-colors">
                SEARCH
              </button>
              <button className="hidden md:block text-xs tracking-wide text-black hover:text-gray-500 transition-colors">
                LOGIN
              </button>
              
              {/* Animated GIF Icon - Brand Logo */}
              <Link href="/cart" className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-transparent flex items-center justify-center overflow-hidden">
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
              <button
                className="md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-sm">
            <div className="px-4 py-4 space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                <button className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors text-left">
                  SEARCH
                </button>
                <button className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors text-left">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}