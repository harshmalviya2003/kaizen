"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Panels from "@/components/scroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Panels/>
      {/* <Services /> */}
      <AboutUs />
      <Industries />
      <Testimonials />
      {/* <LatestNews /> */}
      <Contact />
      <Footer />
    </main>
  );
}