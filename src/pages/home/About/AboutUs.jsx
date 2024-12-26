import { TbEye } from "react-icons/tb"; 
import img from "../../../assets/DSC_0701.jpg";

export default function AboutUs({ Ref }) {
  return (
    <>
      <div className="px-5 my-5" ref={Ref} id="about">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 mb-4 mb-md-0">
            <h1 className="mb-4">About Us</h1>
            <p className="mb-4">
              Brainstorm Group is a group of companies that provide a range of
              services to businesses and individuals.This is also a medium for
              us to incubate and accelerate innovative ideas into successful
              companies and provide technology solutions for Public, and Private
              Sectors.
            </p>
            <div className="row mb-md-4">
              <div className="col-md-6">
                <TbEye
                  size={40}
                  fontWeight="bold"
                  color="gray"
                  className="mb-2"
                />
                <h5 className="mb-2">Mission</h5>
                <p className="small mb-2">
                  To attain global reputation for providing easy to use,
                  innovative, and problem solving technology solutions for
                  Public, and Private Sectors.
                </p>
              </div>
              <div className="col-md-6">
                <TbEye
                  size={40}
                  fontWeight="bold"
                  color="gray"
                  className="mb-2"
                />
                <h5 className="mb-2">Vision</h5>
                <p className="small mb-2">
                  We incubate and accelerate innovative ideas into successful
                  companies and provide technology solutions for Public, and
                  Private Sectors.
                </p>
                {/* <Link to="#" className="text-primary">
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 text-center">
            <img
              src={img}
              alt="Office Desk"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
