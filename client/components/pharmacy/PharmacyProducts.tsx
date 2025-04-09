"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

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
      {/* WhatsApp Chat Widget */}
      <a
        href="https://wa.me/message"
        target="_blank"
        aria-label="Contact us on WhatsApp"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#4CAF50] px-6 py-3 text-white shadow-lg">
          <div className="flex flex-col">
            <span className="text-xs">turomin hoton katin maganin anan</span>
            <span className="text-sm font-semibold">
              Chat via whatsApp danna kawai
            </span>
            <span className="rounded bg-[#4CAF50] px-2 py-0.5 text-xs text-white">
              I&apos;m Online
            </span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Image
              src="/kainuwa/polic1.png"
              alt="Customer Service"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
