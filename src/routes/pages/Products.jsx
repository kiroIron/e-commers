import "./Pro.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/card/Card";
import image_3 from "/public/icons/credit-card-svgrepo-com.svg";
import image_4 from "/public/icons/deal-svgrepo-com.svg";
import image_5 from "/public/icons/delivery-svgrepo-com.svg";
import image_6 from "/public/icons/hours-svgrepo-com.svg";

const Products = () => {
  return (
    <>
      <section className="home_page">
        <h1 className=" container text-center text-light font_size">
          <span className=" font-monospace">
            <b>ShoPpInG</b>
            <CiShoppingCart color="yellow" />
          </span>
        </h1>
        <form className="from_dis">
          <div className="mt-5 container flex justify-content-center align-items-center  ">
            {/* <label htmlFor="search" className="form-label">
              search
            </label> */}
            <input
              type="search"
              className=" border-0  search_dis w-25"
              id="search"
              placeholder=" search for your product"
            />
            <button type="submit" className="btn_dis ">
              <FaSearch />
            </button>
          </div>
        </form>
        <div className=" container from_dis text-light mt-5 ">
          <p className="P_font ">
            <b>
              Get Start
              <br />
              Your favourite shopping
            </b>
          </p>
        </div>
      </section>
      <section className=" container">
        <article className="row mt-4 ">
          <div className="col-3 d-flex justify-content-center  align-items-start gap-2">
            <img className="w-25 " src={image_3} alt="" />
            <div className="">
              <h3>Secure Payments</h3>
              <p>Shop safely with our secure payment options.</p>
            </div>
          </div>

          <div className="col-3 d-flex justify-content-center  align-items-start gap-2">
            <img className="w-25" src={image_4} alt="" />
            <div>
              <h3>Best Deals</h3>
              <p>Exclusive discounts and offers just for you.</p>
            </div>
          </div>

          <div className="col-3 d-flex justify-content-center  align-items-start gap-2">
            <img className="w-25" src={image_5} alt="" />
            <div>
              <h3>Fast Delivery</h3>
              <p>Get your products delivered within 24 hours.</p>
            </div>
          </div>

          <div className="col-3 d-flex justify-content-center  align-items-start gap-2">
            <img className="w-25" src={image_6} alt="" />
            <div>
              <h3>24/7 Support</h3>
              <p>Our team is here to assist you anytime.</p>
            </div>
          </div>
        </article>
        <Card />
      </section>
    </>
  );
};

export default Products;
