import { Button } from "@/components/ui/button"

export default function PetroleumHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #5e35b1 0%, #7b1fa2 50%, #e91e63 100%)",
          opacity: 0.9,
        }}
      />

      {/* medicine rig silhouette background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/kainuwa/kainuwa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Innovative Distribution of{" "}
            <span className="relative inline-block">
              Medicine Products
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            We specialize in the bulk procurement and distribution of petroleum products to our valued customers and
            partners nationwide. Our commitment to providing affordable services extends to every consumer of medicine and
            gas products. Functioning as retail marketers, we supply our high-quality products to corporate
            organizations, private businesses, healthcare facilities, and individual consumers.
          </p>


          <Button className="bg-[#56a747] hover:bg-red-700 text-white font-bold py-5 px-8 rounded-md text-sm uppercase tracking-wide transition-all duration-300">
            OUR PRODUCTS AND SERVICES
          </Button>
        </div>
      </div>
    </div>
  )
}
