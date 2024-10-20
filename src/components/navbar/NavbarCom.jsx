import { CiShoppingCart } from "react-icons/ci";
import "./Nav.css";
import Button from "../buttons/Button";
const NavbarCom = () => {
  return (
    <div className="w-100 h-0 position-sticky top-0  z-3">
      <nav
        className="navbar navbar-expand-lg w-100  bg-dark container nav_dis px-5  block  position-absolute top-0  "
        style={{
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="/">
            <span className=" font-monospace">
              <b>ShoPpInG </b>
              <CiShoppingCart color="yellow" />
            </span>
          </a>
          <button
            className="navbar-toggler btn-light bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-light bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <Button />{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarCom;
