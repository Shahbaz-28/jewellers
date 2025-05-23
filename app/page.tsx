import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedSection from "../components/FeaturedSection";
import HeroSec from "@/components/HeroSec";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <HeroSec/>
      
      {/* Craftsmanship Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-jewelry-dark mb-2">Our Craftsmanship</h2>
            <div className="w-16 h-0.5 bg-jewelry-gold mx-auto mb-4" />
            <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
              Each piece is meticulously crafted by skilled artisans with decades of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-jewelry-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-jewelry-gold text-2xl font-playfair font-bold">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Design</h3>
              <p className="font-montserrat text-gray-600">
                Our designs blend timeless elegance with contemporary style, ensuring each piece remains cherished for generations.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-jewelry-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-jewelry-gold text-2xl font-playfair font-bold">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Materials</h3>
              <p className="font-montserrat text-gray-600">
                We source only the finest materials, including ethically-mined gemstones and certified precious metals.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg transition-transform hover:translate-y-[-5px]">
              <div className="w-16 h-16 bg-jewelry-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-jewelry-gold text-2xl font-playfair font-bold">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-jewelry-dark mb-2">Creation</h3>
              <p className="font-montserrat text-gray-600">
                Every piece is handcrafted with precision and care, combining traditional techniques with modern innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}