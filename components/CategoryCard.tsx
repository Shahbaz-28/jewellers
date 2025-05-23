import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

export default function CategoryCard({ title, imageUrl, slug }: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          width={500}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition-opacity group-hover:opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <h3 className="font-playfair text-white text-2xl font-semibold tracking-wider">{title}</h3>
          <div className="mt-2 w-12 h-0.5 bg-jewelry-gold mx-auto transform transition-all duration-300 group-hover:w-24" />
          <p className="mt-2 text-white font-montserrat text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View Collection
          </p>
        </div>
      </div>
    </Link>
  );
}