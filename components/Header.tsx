"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-black tracking-tight hover:opacity-80 transition-opacity"
          >
            Kaizen
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/docs" 
              className="text-black hover:text-gray-600 transition-colors text-base lg:text-lg font-medium"
            >
              Documentation
            </Link>
            
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-gray-50 text-base lg:text-lg h-10 lg:h-12 px-4 lg:px-6 border-2 rounded-none font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link 
              href="/docs" 
              className="block text-black hover:text-gray-600 transition-colors text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full border-black text-black hover:bg-gray-50 text-lg h-12 px-6 border-2 rounded-none font-medium transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}