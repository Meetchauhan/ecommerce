import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import classes from "./product.module.css";
import spinner from "../images/spinnerCube.svg";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  }, []);
  return (
    <section>
      <h1>All Product</h1>
      {loading ? (
        <img className={classes.loading} src={spinner} alt="loading" />
      ) : (
        <div className={classes.wrapper}>
          {product.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </section>
  );
}
