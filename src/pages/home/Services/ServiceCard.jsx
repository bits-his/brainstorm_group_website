import { Link } from "react-router-dom";
import "./ServiceCard.css";

export function ServiceCard({ title, description, icon, href }) {
  return (
    <>
      {/* <div className="service-card ">
      <div className="service-card-icon">
        <Icon className="w-6 h-6" />
      </div>
      <div className="service-card-title">
        <h3 className="text-xl fw-bold">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
      <Link href={href} className="service-card-link">
        Learn More
      </Link>
    </div> */}

      <div className="service-card d-flex h-100">
        <div className="icon col-2">{icon}</div>
        <div className="col-10 service-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={href} className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
