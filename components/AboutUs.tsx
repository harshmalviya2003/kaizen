"use client";

import { Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    icon: Clock,
    value: "10x",
    label: "Faster Implementation",
    description: "Than industry average",
  },
  {
    icon: CheckCircle,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Across all deployments",
  },
  {
    icon: Users,
    value: "200+",
    label: "Satisfied Clients",
    description: "Global customer base",
  },
  {
    icon: Award,
    value: "40%",
    label: "Cost Reduction",
    description: "Average savings for clients",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50 pt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Why Choose Kaizen
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rethinking Industrial Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the next generation of automation tools that adapt to your workflow, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <h4 className="font-medium text-gray-900">{stat.label}</h4>
                  <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                </div>
              ))}
            </div>

            <Button
              className="group mt-6 active:scale-95 transition-transform"
              aria-label="Learn more about Kaizen's technology stack"
            >
              Our Technology Stack
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Kaizen Automation smart factory interface"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Smart Factory Demo</h3>
              <p className="text-sm opacity-90">See how our clients achieve 30% higher throughput</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}