import { CiShoppingCart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
      <footer className="bg-dark text-light text-center text-lg-start mt-5 w-100">
        <h1 className=" container mt-3 text-center text-light font_size">
          <span className=" font-monospace">
            <b>ShoPpInG</b>
            <CiShoppingCart color="yellow" />
          </span>
        </h1>
        <div className="container p-4 text-center">
          <div className="row container">
            <div className="col-6 mb-4">
              <h5 className="text-uppercase"> <b>About<span className="color_span">Us</span></b></h5>
              <p>
                We are a team of 
                passionate individuals <br />
                committed to providing<br/>
                the best service possible.
              </p>
            </div>
            
            <div className="col-6 mb-4 ">
              <h5 className="text-uppercase">
                <b>
                  Follow <span className="color_span">Us</span>
                </b>
              </h5>
              <a href="/" className="text-white me-4 btn btn_dis"><FaFacebook className="icon_color" color= " rgb(210, 84, 30)"/></a>
              <a href="/" className="text-white me-4 btn btn_dis"><FaInstagramSquare className="icon_color" color=" rgb(210, 84, 30)"/></a>
              <a href="/" className="text-white me-4 btn btn_dis"><FaSquareTwitter className="icon_color" color=" rgb(210, 84, 30)"/></a>
              <a href="/" className="text-white me-4 btn btn_dis"><FaPinterest className="icon_color" color=" rgb(210, 84, 30)"/></a>
            </div>
          </div>
        </div>

        <div className="text-center p-3">© 2024 Your Company Name</div>
      </footer>
  );
};

export default Footer;
