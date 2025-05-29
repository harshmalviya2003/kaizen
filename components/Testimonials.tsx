"use client";

import { Card, CardHeader, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The automation solutions provided by AutomatePro have significantly improved our manufacturing efficiency by 40%.",
    author: "John Smith",
    position: "Operations Director",
    company: "Global Motors Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "Their expertise in robotics integration helped us achieve a 50% reduction in production time.",
    author: "Sarah Johnson",
    position: "Technical Manager",
    company: "PharmaTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our automation solutions have transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}