import { notFound } from "next/navigation";
import Image from "next/image";
import JewelryCard from "../../../components/JewelryCard";
import { jewelryData, categories } from "../../../lib/jewelry-data";

// Category metadata for display
const categoryInfo = {
  rings: {
    title: "Rings",
    description: categories.find(c => c.slug === "rings")?.description || "",
    bannerImage: categories.find(c => c.slug === "rings")?.imageUrl || ""
  },
  necklaces: {
    title: "Necklaces",
    description: categories.find(c => c.slug === "necklaces")?.description || "",
    bannerImage: categories.find(c => c.slug === "necklaces")?.imageUrl || ""
  },
  earrings: {
    title: "Earrings",
    description: categories.find(c => c.slug === "earrings")?.description || "",
    bannerImage: categories.find(c => c.slug === "earrings")?.imageUrl || ""
  },
  bracelets: {
    title: "Bracelets",
    description: categories.find(c => c.slug === "bracelets")?.description || "",
    bannerImage: categories.find(c => c.slug === "bracelets")?.imageUrl || ""
  }
};

type CategoryParams = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryParams) {
  const { slug } = params;
  
  // Check if the category exists
  if (!jewelryData[slug as keyof typeof jewelryData]) {
    notFound();
  }
  
  const jewelry = jewelryData[slug as keyof typeof jewelryData];
  const category = categoryInfo[slug as keyof typeof categoryInfo];
  
  return (
    <div>
      {/* Category Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-jewelry-dark/30 z-10" />
        <Image
          src={category.bannerImage}
          alt={category.title}
          className="object-cover w-full h-full"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wider mb-4">{category.title}</h1>
          <div className="w-16 h-0.5 bg-jewelry-gold" />
        </div>
      </div>
      
      {/* Category Description */}
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <p className="font-montserrat text-lg text-gray-700">
          {category.description}
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {jewelry.map((item) => (
            <JewelryCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}