import AboutSection from "@/components/kainuwa/About";
import Hero from "@/components/kainuwa/Hero";
import Nav from "@/components/kainuwa/Nav";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <AboutSection />
    </main>
  );
}
