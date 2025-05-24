"use client"

import { Award, Heart, Shield, Sparkles } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-jewelry-dark mb-6">
              About <span className="text-jewelry-gold">RK Jewels</span>
            </h1>
            <p className="font-montserrat text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting timeless elegance and exceptional beauty through exquisite jewelry that tells your unique story
              for over three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-jewelry-dark mb-6">Our Story</h2>
              <div className="space-y-4 font-montserrat text-gray-600 leading-relaxed">
                <p>
                  Founded in 1990, RK Jewels began as a small family business with a passion for creating
                  extraordinary jewelry pieces. What started in a modest workshop has grown into a renowned jewelry
                  house, trusted by customers worldwide.
                </p>
                <p>
                  Our journey has been guided by an unwavering commitment to quality, craftsmanship, and customer
                  satisfaction. Each piece we create is a testament to our dedication to excellence and our love for the
                  art of jewelry making.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation, ensuring that every piece of
                  jewelry we craft meets the highest standards of beauty and quality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-jewelry-gold/20 to-jewelry-gold/5 rounded-2xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Jewelry craftsmanship"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-jewelry-dark mb-4">Our Values</h2>
            <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-jewelry-gold/10 rounded-full mb-4 group-hover:bg-jewelry-gold/20 transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-jewelry-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Excellence</h3>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                We strive for perfection in every detail, ensuring each piece meets our exacting standards.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-jewelry-gold/10 rounded-full mb-4 group-hover:bg-jewelry-gold/20 transition-colors duration-300">
                <Heart className="w-8 h-8 text-jewelry-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Passion</h3>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                Our love for jewelry design drives us to create pieces that inspire and delight.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-jewelry-gold/10 rounded-full mb-4 group-hover:bg-jewelry-gold/20 transition-colors duration-300">
                <Shield className="w-8 h-8 text-jewelry-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Trust</h3>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                We build lasting relationships through transparency, honesty, and reliable service.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-jewelry-gold/10 rounded-full mb-4 group-hover:bg-jewelry-gold/20 transition-colors duration-300">
                <Award className="w-8 h-8 text-jewelry-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Heritage</h3>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                We honor traditional craftsmanship while embracing modern innovation and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-jewelry-dark mb-4">Meet Our Team</h2>
            <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
              The talented artisans and designers behind every masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sarah Johnson - Master Jeweler"
                  className="w-48 h-48 mx-auto rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-1">Sarah Johnson</h3>
              <p className="font-montserrat text-jewelry-gold font-medium mb-2">Master Jeweler & Founder</p>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                With over 30 years of experience, Sarah founded RK Jewels with a vision to create timeless pieces
                that celebrate life's precious moments.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Michael Chen - Head Designer"
                  className="w-48 h-48 mx-auto rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-1">Michael Chen</h3>
              <p className="font-montserrat text-jewelry-gold font-medium mb-2">Head Designer</p>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                Michael brings innovative design concepts to life, blending contemporary aesthetics with classical
                elegance in every creation.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Emma Rodriguez - Gemologist"
                  className="w-48 h-48 mx-auto rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-1">Emma Rodriguez</h3>
              <p className="font-montserrat text-jewelry-gold font-medium mb-2">Chief Gemologist</p>
              <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                Emma ensures every gemstone meets our exacting standards, bringing her expertise in precious stones to
                every piece we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-jewelry-dark to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="font-montserrat text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection and let us help you find jewelry that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/category/rings"
              className="inline-flex items-center justify-center px-8 py-3 bg-jewelry-gold hover:bg-yellow-500 text-white font-montserrat font-medium rounded-full transition-colors duration-300"
            >
              Explore Collection
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-jewelry-dark font-montserrat font-medium rounded-full transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}