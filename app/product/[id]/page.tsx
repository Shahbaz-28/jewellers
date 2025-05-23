import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { featuredItems, jewelryData } from "../../../lib/jewelry-data";
import { ArrowLeft } from "lucide-react";

// Function to find a product by ID across all categories
const findProductById = (id: string) => {
  // Check featured items first
  const featuredProduct = featuredItems.find(item => item.id === id);
  if (featuredProduct) return featuredProduct;
  
  // Check all category products
  for (const category in jewelryData) {
    const products = jewelryData[category as keyof typeof jewelryData];
    const product = products.find(item => item.id === id);
    if (product) return product;
  }
  
  return null;
};

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = findProductById(id);
  
  if (!product) {
    notFound();
  }
  
  // Find related products from the same category (up to 4)
  const categoryKey = product.category.toLowerCase() as keyof typeof jewelryData;
  
  // Define the type for our products
  type JewelryItem = {
    id: string;
    name: string;
    imageUrl: string;
    category: string;
    price: string;
  };
  
  let relatedProducts: JewelryItem[] = [];
  
  if (jewelryData[categoryKey]) {
    const categoryProducts = jewelryData[categoryKey];
    relatedProducts = categoryProducts
      .filter(item => item.id !== id)
      .slice(0, 4);
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href={`/category/${categoryKey}`}
          className="flex items-center text-jewelry-gold hover:text-jewelry-dark transition-colors duration-300 font-montserrat text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to {product.category}
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-jewelry-dark">{product.name}</h1>
          <p className="text-jewelry-gold text-2xl font-semibold font-montserrat">{product.price}</p>
          
          <div className="w-16 h-0.5 bg-jewelry-gold my-6" />
          
          <div className="prose font-montserrat text-gray-700">
            <p>
              This exquisite piece showcases exceptional craftsmanship and attention to detail. 
              Each element is meticulously crafted to create a stunning piece that will be treasured for generations.
            </p>
            <p className="mt-4">
              Our jewelry is made using only the finest materials, including ethically-sourced gemstones 
              and precious metals of the highest quality.
            </p>
          </div>
          
          {/* Details */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-playfair text-lg font-semibold mb-4">Details</h3>
            <ul className="space-y-2 font-montserrat text-sm text-gray-600">
              <li>• Material: Premium {product.category.includes("Gold") ? "Gold" : "Silver"}</li>
              <li>• Gemstone: {product.name.includes("Diamond") ? "Diamond" : 
                           product.name.includes("Sapphire") ? "Sapphire" : 
                           product.name.includes("Ruby") ? "Ruby" : 
                           product.name.includes("Emerald") ? "Emerald" : 
                           product.name.includes("Pearl") ? "Pearl" : "Mixed Gemstones"}</li>
              <li>• Style: {product.name.includes("Vintage") ? "Vintage" : "Contemporary"}</li>
              <li>• Collection: Signature {product.category}</li>
            </ul>
          </div>
          
          {/* Call to action */}
          <div className="mt-8">
            <button className="w-full bg-jewelry-gold hover:bg-opacity-90 text-white font-montserrat py-3 px-6 rounded-sm transition-all duration-300 transform hover:-translate-y-1">
              Contact for Inquiry
            </button>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-playfair text-2xl font-bold text-jewelry-dark mb-6">Related Pieces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                </div>
                <h3 className="font-playfair text-jewelry-dark text-lg font-medium">{item.name}</h3>
                <p className="font-montserrat text-jewelry-gold font-semibold">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}