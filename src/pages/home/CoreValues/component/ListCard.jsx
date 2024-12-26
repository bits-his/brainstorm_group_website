
export default function ListCard() {
  return (
    <div>
      {/* list card */}
      <div className="col-md-4 position-relative mb-4">
            <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Scale</h3>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Social Media
              </li>
              <li>
                <i className="text-success me-2">✔</i>Paid Campaigns
              </li>
              <li>
                <i className="text-success me-2">✔</i>Marketing & SEO
              </li>
        </ul>
      </div>
    </div>
  );
}

