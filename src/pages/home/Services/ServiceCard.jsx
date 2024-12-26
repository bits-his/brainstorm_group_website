
import { Link } from "react-router-dom";
import "./ServiceCard.css";

export function ServiceCard({ title, description, icon: Icon, href }) {
  return (
    <div className="service-card ">
      <div className="service-card-icon">
        <Icon className="w-6 h-6" />
      </div>
      <div className="service-card-title">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
      <Link href={href} className="service-card-link">
        Learn More
      </Link>
    </div>
  );
}
