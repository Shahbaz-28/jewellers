import CategoryCard from "./CategoryCard";
import { categories } from "../lib/jewelry-data";

export default function CategorySection() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-jewelry-dark mb-2">Shop By Category</h2>
          <div className="w-16 h-0.5 bg-jewelry-gold mx-auto mb-4" />
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Browse our collections by category to find the perfect piece for any occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.title}
              imageUrl={category.imageUrl}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}