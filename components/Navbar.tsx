"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-playfair text-2xl font-bold text-jewelry-dark tracking-wider">
                <span className="text-jewelry-gold">ELEGANT</span> JEWELS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              Home
            </Link>
            <Link href="/category/rings" className="font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              Rings
            </Link>
            <Link href="/category/necklaces" className="font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              Necklaces
            </Link>
            <Link href="/category/earrings" className="font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              Earrings
            </Link>
            <Link href="/category/bracelets" className="font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              Bracelets
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button aria-label="Search" className="p-2 text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button aria-label="View Cart" className="p-2 text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-jewelry-dark hover:text-jewelry-gold focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/category/rings" 
              className="block px-3 py-2 text-base font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Rings
            </Link>
            <Link 
              href="/category/necklaces" 
              className="block px-3 py-2 text-base font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link 
              href="/category/earrings" 
              className="block px-3 py-2 text-base font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link 
              href="/category/bracelets" 
              className="block px-3 py-2 text-base font-montserrat text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Bracelets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}