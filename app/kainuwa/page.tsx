import AboutSection from "@/components/kainuwa/About";
import BlogPostsWithRealImages from "@/components/kainuwa/BlogPosts";
import CompanyMilestones from "@/components/kainuwa/Company";
import FooterSection from "@/components/kainuwa/Footer";
import Hero from "@/components/kainuwa/Hero";
import KainuwaLogo from "@/components/kainuwa/KainuwaLogo";
import Nav from "@/components/kainuwa/Nav";
import PharmacyHero from "@/components/kainuwa/PharmacyHero";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <AboutSection />
      <KainuwaLogo />
      <CompanyMilestones />
      <PharmacyHero />
      <BlogPostsWithRealImages />
      <FooterSection />
    </main>
  );
}
