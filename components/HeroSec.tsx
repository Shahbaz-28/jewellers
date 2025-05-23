export default function HeroSec() {
  return (
    <section className="py-20 bg-muted/30 ">
      <div className="max-w-7xl container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-foreground text-center mb-16">
          The <span className="text-primary">Signature</span> Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl">Handcrafted Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Each piece in our signature collection is meticulously crafted by master artisans with decades of experience. 
              Using only the finest materials and gemstones, we create jewelry that stands the test of time.
            </p>
            <div className="pt-4">
              <button className="relative overflow-hidden group px-6 py-3 border border-primary text-primary hover:text-background transition-colors duration-300">
                <span className="relative z-10">DISCOVER MORE</span>
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-[url('/images/ring1.jpg')] bg-cover bg-center rounded-sm"></div>
              <div className="aspect-square bg-[url('/images/earring1.jpg')] bg-cover bg-center rounded-sm"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-[url('/images/bracelet1.jpg')] bg-cover bg-center rounded-sm"></div>
              <div className="aspect-[3/4] bg-[url('/images/necklace1.jpg')] bg-cover bg-center rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}