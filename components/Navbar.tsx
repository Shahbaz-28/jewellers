"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-playfair text-xl sm:text-2xl font-bold text-jewelry-dark tracking-wider">
                <span className="text-jewelry-gold">RK</span> JEWELS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/category/rings"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              Rings
            </Link>
            <Link
              href="/category/necklaces"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              Necklaces
            </Link>
            <Link
              href="/category/earrings"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              Earrings
            </Link>
            <Link
              href="/category/bracelets"
              className="font-montserrat text-sm font-medium text-jewelry-dark hover:text-jewelry-gold transition-colors duration-300 px-3 py-2 rounded-md"
            >
              Bracelets
            </Link>
          </div>

          {/* WhatsApp Contact Button */}
          <div className="hidden sm:flex sm:items-center">
            <a
              href="https://wa.me/779678964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-montserrat text-sm font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label="Contact us on WhatsApp"
            >
              <Phone size={16} className="mr-2" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-jewelry-dark hover:text-jewelry-gold focus:outline-none focus:ring-2 focus:ring-jewelry-gold focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle main menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/category/rings"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Rings
            </Link>
            <Link
              href="/category/necklaces"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              href="/category/earrings"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              href="/category/bracelets"
              className="block px-3 py-2 text-base font-montserrat font-medium text-jewelry-dark hover:text-jewelry-gold hover:bg-gray-50 transition-colors duration-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Bracelets
            </Link>

            {/* Mobile WhatsApp Button */}
            <div className="px-3 py-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-montserrat text-sm font-medium rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact us on WhatsApp"
              >
                <Phone size={16} className="mr-2" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
