import {
  PieChart,
  HeartPulse,
  Briefcase,
  AlertTriangle,
  BookOpen,
  ShoppingBag,
  // Boxes,
  // Truck,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { MdOutlineInventory } from "react-icons/md";

const services = [
  {
    title: "Public Finance Management",
    description:
      "We provide Public Institutions across all levels with Public Finance Management Suite (PFMS) - a set of software solutions for effective governance and financial oversight. The E-Budget, and Expenditure component of our PFMS have been implemented for some State Governments in Nigeria with testimonies of excellent end-user experience.",
    icon: <PieChart size="35" />, // Represents financial data and insights
    href: "/services/public-finance",
  },
  {
    title: "Healthcare Information Management",
    description:
      "We provide our growing client base with a comprehensive hospital management system that streamlines all aspects of healthcare operations. Our solution eliminated complex and demanding task of managing hospital operations thereby allowing them focus on what they do best - providing quality healthcare to their patients.",
    icon: <HeartPulse size="35" />, // Represents healthcare and medical systems
    href: "/services/healthcare",
  },
  {
    title: "Cooperative Finance Management",
    description:
      "Cooperative Societies are onboarding our platform  to  keep track of your members, savings, loans, and other operations peculiar to each cooperative group.",
    icon: <Briefcase size="35" />, // Represents corporate tools and solutions
    href: "/services/corporate",
  },
  {
    title: "Agriculture Risk and Disaster Mitigation",
    description:
      "Our Early Warning Dissemination and Information App poised to secure Farmers and their farms, ensuring for security and sustainable livelihoods in the face of evolving climate dynamics by efficiently empowering farmers with vital insights to mitigate climate risks. The of goal of this adaptive solution is to bridge the information gap and fortify agricultural resilience. ",
    icon: <AlertTriangle size="35" />, // Represents warnings and alerts
    href: "/services/early-warning",
  },
  {
    title: "Educational Information Systems",
    description:
      "Our School Management Suite of services including Result processing, student demographics, time attendance, health management, payroll, payments and accounting. We bring parents, teachers, students, and school management together in one platform thereby automating every operational processes of a School.",
    icon: <BookOpen size="35" />, // Represents education and knowledge
    href: "/services/education",
  },
  {
    title: "E-commerce Solutions",
    description:
      "We connect shoppers all over the country with verified merchants, farmers, and producers of good and services with special consideration to price, quality, and proximity. We collaborate with verified logistics service providers to ensure delivery within 24 hours.",
    icon: <ShoppingBag size="35" />, // Represents e-commerce and shopping
    href: "/services/ecommerce",
  },
  {
    title: "POS and Accounting System",
    description:
      "Accounting, Inventory, and Sales Automation for SMEs. We help SMEs to drive Operational Efficiency by accurately tracking inventory, revenue, expenses, payables, and receivables within and off premises 24/7.",
    icon: <MdOutlineInventory size="35" />, // Represents inventory and logistics
    href: "/services/inventory",
  },
];

export default function Services({ refi }) {
  return (
    <div id="services" ref={refi}>
      <section className="py-12 px-5 md:py-24">
        <div className="row">
          <div className="services-header">
            <h2 className="services-title">
              Our <span>Services</span>
            </h2>
            <p className="services-subtitle ">
              Explore our wide range of solutions tailored for your needs.
            </p>
          </div>
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
