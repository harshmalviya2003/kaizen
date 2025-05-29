import { Notebook as Robot, Cpu, Eye, Settings, Database, Cog } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const services = [
  {
    title: "Industrial Robotics",
    description: "Advanced robotic solutions for manufacturing and assembly",
    icon: Robot,
  },
  {
    title: "PLC & HMI Programming",
    description: "Custom programming for automated control systems",
    icon: Cpu,
  },
  {
    title: "Machine Vision Systems",
    description: "Quality control and inspection automation",
    icon: Eye,
  },
  {
    title: "Custom Automation",
    description: "Tailored solutions for unique industrial needs",
    icon: Settings,
  },
  {
    title: "SCADA Systems",
    description: "Comprehensive monitoring and control solutions",
    icon: Database,
  },
  {
    title: "Maintenance Services",
    description: "Preventive and corrective maintenance support",
    icon: Cog,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation solutions tailored to your industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}