"use client";

import { useState } from "react";
import { Heart, ShoppingCart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function PharmacyProductGrid() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: "1",
      name: "Emzor Paracetamol 500mg Tablets *96",
      price: 9.5,
      image: "/kainuwa/emzor1.png",
    },
    {
      id: "2",
      name: "Emprofen E 200mg Soft Gel 1*10",
      price: 24.0,
      image: "/kainuwa/emzor2.png",
    },
    {
      id: "3",
      name: "Emzor Paracetamol 500mg Tablets *1000",
      price: 12.0,
      image: "/kainuwa/emzor3.png",
    },
    {
      id: "4",
      name: "Folic acid tablets 5mg",
      price: 54.5,
      image: "/kainuwa/polic1.png",
    },
    {
      id: "5",
      name: "Emzor Paracetamol 500mg Tablets *1000",
      price: 9.0,
      image: "/kainuwa/polic2.png",
    },
    {
      id: "6",
      name: "Em-vit'c vitamin cyrup 200ml",
      price: 13.5,
      image: "/kainuwa/polic4.png",
    },
    {
      id: "7",
      name: "Emzor Paracetamol 500mg Tablets *96",
      price: 9.5,
      image: "/kainuwa/emzor1.png",
    },
    {
      id: "8",
      name: "Emprofen E 200mg Soft Gel 1*10",
      price: 24.0,
      image: "/kainuwa/emzor2.png",
    },
    {
      id: "9",
      name: "Emzor Paracetamol 500mg Tablets *1000",
      price: 12.0,
      image: "/kainuwa/emzor3.png",
    },
    {
      id: "10",
      name: "Emzor Paracetamol 500mg Tablets *1000",
      price: 12.0,
      image: "/kainuwa/emzor3.png",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container bg-white mx-auto px-4 py-8 relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border border-gray-200 bg-white rounded-md overflow-hidden"
          >
            <CardContent className="p-0 relative">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites[product.id]
                      ? "fill-[#56a747] text-[#56a747]"
                      : "text-gray-400"
                  }`}
                />
              </button>
              <div className="h-48 flex items-center justify-center bg-white p-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="absolute bottom-2 left-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm font-medium">5</span>
              </div>
              <Button className="absolute bottom-2 right-2 bg-[#56a747] hover:bg-[#56a747] text-white rounded-md px-3 py-1 text-sm flex items-center">
                <ShoppingCart className="h-4 w-4 mr-1" />
                ADD
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4 pt-2">
              <h3 className="text-sm text-black font-medium text-bl line-clamp-2 h-10">
                {product.name}
              </h3>
              <p className="text-[#56a747] font-bold mt-2">
                AED {product.price.toFixed(2)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 z-50 bg-[#56a747] hover:bg-[#56a747] text-white rounded-full p-3 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href="https://wa.me/message"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-5 w-5 fill-current"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
