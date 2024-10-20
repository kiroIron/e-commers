import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Single_page.css";
import "/src/components/card/card.css";
export default function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Something went wrong with fetching Products");
        }

        const data = await res.json();

        if (id && typeof data !== "object") {
          throw new Error("Product not found");
        }

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (isLoading)
    return (
      <div className=" container  d-flex justify-content-center align-content-center w-100 min-100vh mt-5 pt-5">
      <article className="row  container">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </article>
      </div>
    );
  if (error) return <div>{error}</div>;
  return (
    <div className=" container  d-flex justify-content-center w-50 mt-5 pt-5">
      <article className="row  container">
        <div className="col-6">
          <img className="w-75 mt-5" src={product.image} alt="product-img" />
        </div>

        <div className="col-6 mt-5 pt-5 container w-50">
          <h1>{product.title}</h1>

          <div className="rating mb-2">
            {[...Array(5)].map((_, i) =>
              i < Math.round(product?.rating?.rate) ? (
                <span className="text-warning" key={i}>
                  &#9733;
                </span>
              ) : (
                <span className="text-muted" key={i}>
                  &#9733;
                </span>
              )
            )}
          </div>
          <p>{product.description}</p>
          <p className="card-text">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            }).format(Math.round(product.price))}
          </p>

          <button className="learn-more">Buy Now</button>
        </div>
      </article>
    </div>
  );
}
