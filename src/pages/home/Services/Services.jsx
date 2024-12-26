import {
  Laptop,
  ShoppingCart,
  MessageSquare,
  Paintbrush,
  Puzzle,
  Smartphone,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: Laptop,
    href: "/services/web-design",
  },
  {
    title: "eCommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
  },
  {
    title: "Web Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: MessageSquare,
    href: "/services/web-applications",
  },
  {
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: Paintbrush,
    href: "/services/branding",
  },
  {
    title: "Copy Writing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: Puzzle,
    href: "/services/copy-writing",
  },
  {
    title: "Mobile Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: Smartphone,
    href: "/services/mobile-applications",
  },
];

export default function Services({ refi }) {
  return (
    <div id="services" ref={refi}>
      <section className="py-12 px-4 md:py-24">
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
