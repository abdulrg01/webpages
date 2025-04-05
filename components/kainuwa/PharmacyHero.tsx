"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PetroleumHero() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
          {/* Main heading with highlighted text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Innovative Distribution of{" "}
            <span className="relative inline-block">
              Medicine Products
            </span>
          </h1>

          {/* Description paragraph */}
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            We specialize in the bulk procurement and distribution of petroleum products to our valued customers and
            partners nationwide. Our commitment to providing affordable services extends to every consumer of medicine and
            gas products. Functioning as retail marketers, we supply our high-quality products to corporate
            organizations, private businesses, healthcare facilities, and individual consumers.
          </p>

          {/* CTA Button */}
          <Button className="bg-[#56a747] hover:bg-red-700 text-white font-bold py-5 px-8 rounded-md text-sm uppercase tracking-wide transition-all duration-300">
            OUR PRODUCTS AND SERVICES
          </Button>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#56a747] hover:bg-[#56a747] text-white p-3 rounded-md z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
