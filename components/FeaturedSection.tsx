import JewelryCard from "./JewelryCard";
import { featuredItems } from "../lib/jewelry-data";

export default function FeaturedSection() {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-jewelry-dark mb-2">Featured Collection</h2>
          <div className="w-16 h-0.5 bg-jewelry-gold mx-auto mb-4" />
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Discover our most exquisite pieces, meticulously crafted to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <JewelryCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              category={item.category}
              // price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}