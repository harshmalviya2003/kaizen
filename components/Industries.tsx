"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Logistics Automation",
    description: "End-to-end warehouse automation with AI-powered sorting and inventory management",
    image: "https://images.unsplash.com/photo-1604268996301-3c2dcb7fa107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stats: "Reduce operational costs by 35%"
  },
  {
    name: "Healthcare Robotics",
    description: "Precision automation for pharmaceutical production and medical device manufacturing",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stats: "Increase production accuracy by 99.8%"
  },
  {
    name: "Smart Manufacturing",
    description: "IoT-enabled factory automation with real-time monitoring and predictive maintenance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stats: "Boost production output by 40%"
  },
  {
    name: "Financial Process Automation",
    description: "AI-driven back-office automation for banks and financial institutions",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stats: "Process 10x more transactions daily"
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Industry Solutions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored Automation for Your Sector
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We develop specialized solutions that address unique challenges in each industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Card 
              key={industry.name} 
              className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl">{industry.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {industry.description}
                </CardDescription>
                <p className="text-sm font-medium text-primary mt-2">
                  {industry.stats}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="gap-2 group">
            Explore All Industry Solutions
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}