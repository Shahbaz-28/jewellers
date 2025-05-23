import Image from "next/image";
import Link from "next/link";

interface JewelryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  price: string;
}

export default function JewelryCard({ id, name, imageUrl, category, price }: JewelryCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Link href={`/product/${id}`}>
          <div className="aspect-square overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={name}
              width={400}
              height={400}
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
        </Link>
      </div>
      <h3 className="font-playfair text-jewelry-dark text-lg font-medium">{name}</h3>
      <p className="font-montserrat text-sm text-gray-500 mb-1">{category}</p>
      <p className="font-montserrat text-jewelry-gold font-semibold">{price}</p>
    </div>
  );
}