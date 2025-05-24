"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

// Array of beautiful jewelry images from Unsplash
const heroImages = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
]

// Content for each slide
const slideContent = [
  {
    title: "Eternal",
    subtitle: "Promises",
    description: "Discover our exquisite collection of engagement rings",
    subtext: "Crafted to symbolize your forever love",
    primaryCTA: "Shop Rings",
    primaryLink: "/category/rings",
    secondaryCTA: "Custom Design",
    secondaryLink: "/custom-rings",
  },
  {
    title: "Graceful",
    subtitle: "Necklaces",
    description: "Elegant necklaces that complement your natural beauty",
    subtext: "From delicate chains to statement pieces",
    primaryCTA: "Shop Necklaces",
    primaryLink: "/category/necklaces",
    secondaryCTA: "View Collection",
    secondaryLink: "/collections/necklaces",
  },
  {
    title: "Stunning",
    subtitle: "Earrings",
    description: "Sophisticated earrings for every occasion",
    subtext: "From everyday elegance to special moments",
    primaryCTA: "Shop Earrings",
    primaryLink: "/category/earrings",
    secondaryCTA: "New Arrivals",
    secondaryLink: "/new-earrings",
  },
  {
    title: "Luxurious",
    subtitle: "Bracelets",
    description: "Exquisite bracelets that make a statement",
    subtext: "Timeless designs for the modern woman",
    primaryCTA: "Shop Bracelets",
    primaryLink: "/category/bracelets",
    secondaryCTA: "Gift Sets",
    secondaryLink: "/gift-bracelets",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Get current slide content
  const currentContent = slideContent[currentSlide]

  return (
    <div className="relative overflow-hidden h-screen max-h-[600px] w-full">
      {/* Background Slideshow */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Animation */}
          <div key={currentSlide} className="animate-fade-in">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider mb-6 leading-tight">
              <span className="block">{currentContent.title}</span>
              <span className="block text-jewelry-gold">{currentContent.subtitle}</span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 sm:w-16 h-0.5 bg-white/30"></div>
              <div className="w-6 sm:w-8 h-0.5 bg-jewelry-gold mx-3 sm:mx-4"></div>
              <div className="w-12 sm:w-16 h-0.5 bg-white/30"></div>
            </div>

            {/* Subtitle */}
            <p className="font-montserrat text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
              {currentContent.description}
            </p>
            <p className="font-montserrat text-base sm:text-lg text-jewelry-gold max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {currentContent.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={currentContent.primaryLink}
                className="inline-flex items-center justify-center bg-jewelry-gold hover:bg-yellow-500 text-white font-montserrat font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-base sm:text-lg min-w-[180px] sm:min-w-[200px]"
              >
                {currentContent.primaryCTA}
              </Link>
              <Link
                href={currentContent.secondaryLink}
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-jewelry-dark font-montserrat font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg min-w-[180px] sm:min-w-[200px]"
              >
                {currentContent.secondaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-jewelry-gold w-6 sm:w-8" : "bg-white/50 w-2 sm:w-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-jewelry-gold transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-jewelry-gold transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
