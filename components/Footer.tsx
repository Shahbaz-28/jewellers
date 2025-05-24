import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-jewelry-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-playfair text-xl font-bold text-jewelry-gold">
              RK JEWELS
            </h2>
            <p className="font-montserrat text-sm text-gray-300">
              Crafting timeless elegance since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link href="/category/rings" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/category/necklaces" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/category/earrings" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/category/bracelets" className="text-gray-300 hover:text-jewelry-gold transition-colors duration-300">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-jewelry-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-jewelry-gold" />
                <span className="text-gray-300">contact@RKjewels.com</span>
              </li>
              <li className="text-gray-300 mt-2">
                123 Luxury Avenue<br />
                New York, NY 10001<br />
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="font-montserrat text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} RK Jewels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}