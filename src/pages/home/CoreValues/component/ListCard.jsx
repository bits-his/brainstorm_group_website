import PropTypes from 'prop-types';
import "../../home.styles.css"
    
export default function ListCard({ name, description }) {
  return (
    <div>
      {/* list card */}
      <div className="position-relative mb-4">
        <div className="dots-pattern"></div>
        <h3 className=" mb-3 core-values-title">{name}</h3>
        <ul className=" row list-unstyled text-start ">
          <li className="col-md-12 col-sm-4">
            <i className="list-icon me-2">✔</i>
            {description}
          </li>
        </ul>
      </div>
    </div>
  );
}

ListCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

