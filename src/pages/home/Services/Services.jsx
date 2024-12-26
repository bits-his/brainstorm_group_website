import {
  PieChart,
  HeartPulse,
  Briefcase,
  AlertTriangle,
  BookOpen,
  ShoppingBag,
  Boxes,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Public Finance",
    description: "Optimize tax and budgeting systems.",
    icon: PieChart, // Represents financial data and insights
    href: "/services/public-finance",
  },
  {
    title: "Healthcare Solutions",
    description: "Innovative technology for health systems.",
    icon: HeartPulse, // Represents healthcare and medical systems
    href: "/services/healthcare",
  },
  {
    title: "Corporate Solutions",
    description: "Streamline operations with tailored software.",
    icon: Briefcase, // Represents corporate tools and solutions
    href: "/services/corporate",
  },
  {
    title: "Early Warning Systems",
    description: "Proactive disaster management solutions.",
    icon: AlertTriangle, // Represents warnings and alerts
    href: "/services/early-warning",
  },
  {
    title: "Education Solutions",
    description: "Empowering learning through technology.",
    icon: BookOpen, // Represents education and knowledge
    href: "/services/education",
  },
  {
    title: "E-commerce Solutions",
    description: "Build scalable online stores.",
    icon: ShoppingBag, // Represents e-commerce and shopping
    href: "/services/ecommerce",
  },
  {
    title: "Inventory Management",
    description: "Efficient tracking and stock control.",
    icon: Boxes, // Represents inventory and logistics
    href: "/services/inventory",
  },
];

export default function Services({ refi }) {
  return (
    <div id="services" ref={refi}>
      <section className="py-12 px-4 md:py-24">
        <div className="services-header">
          <h2 className="services-title">
            Our <span>Services</span>
          </h2>
          <p className="services-subtitle">
            Explore our wide range of solutions tailored for your needs.
          </p>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
