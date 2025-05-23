import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[url('https://assets.macaly-user-data.dev/qw4x1j9qayijxdafxi1lxu6c/qoeaf6a6ipxgsirao4r4isfq/t_-K8-u6QnJxABPEgXE86/tmpi4wmn822.webp')] bg-cover bg-center py-32 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
          Timeless Elegance
        </h1>
        <div className="w-24 h-0.5 bg-jewelry-gold my-6" />
        <p className="font-montserrat text-lg md:text-xl max-w-xl mb-8">
          Discover our exquisite collection of fine jewelry crafted to celebrate life's precious moments.
        </p>
        <Link 
          href="/categories" 
          className="inline-block bg-jewelry-gold hover:bg-opacity-90 text-white font-montserrat px-8 py-3 rounded-sm transition-all duration-300 transform hover:-translate-y-1"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
}