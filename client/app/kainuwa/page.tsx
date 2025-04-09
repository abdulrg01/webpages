// import AboutSection from "@/components/kainuwa/About";
import BlogPostsWithRealImages from "@/components/kainuwaaa/BlogPosts";
import CompanyMilestones from "@/components/kainuwaaa/Company";
import FooterSection from "@/components/kainuwaaa/Footer";
import Hero from "@/components/kainuwaaa/Hero";
import KainuwaLogo from "@/components/kainuwaaa/KainuwaLogo";
import Nav from "@/components/kainuwaaa/Nav";
import PharmacyHero from "@/components/kainuwaaa/PharmacyHero";
import PharmacyProductGrid from "@/components/kainuwaaa/PharmacyProducts";
import Ready from "@/components/kainuwaaa/Ready";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <PharmacyProductGrid />
      {/* <AboutSection /> */}
      <KainuwaLogo />
      <CompanyMilestones />
      <PharmacyHero />
      <BlogPostsWithRealImages />
      <Ready />
      <FooterSection />
    </main>
  );
}
