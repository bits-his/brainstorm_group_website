export default function ListCard({ name, description }) {
  return (
    <div>
      {/* list card */}
      <div className="position-relative mb-4">
        <div className="dots-pattern"></div>
        <h3 className="text-primary mb-3">{name}</h3>
        <div className="row">
          <ul className=" col-md-4 col-sm-4  text-start ">
            <li className="">
              <i className="text-success me-2">✔</i>
              {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
