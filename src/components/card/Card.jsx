import "./card.css";
// import image_tow from "/public/images/linen-data.jpg";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
const Card = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Something went wrong with fetching Products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="  container gap-4 d-flex justify-content-center align-content-center flex-wrap">
          {isLoading && (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && <div>{error}</div>}
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
