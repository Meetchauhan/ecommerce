import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import classes from "./product.module.css";
import spinner from "../images/spinnerCube.svg";
import CategoryFilter from "../components/filter/CategoryFilter";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  }, [filter]);
  return (
    <section>
      <div className={classes.headingSection}>
        <h1>All Product</h1>
        <CategoryFilter onChangeHandler={setFilter} />
      </div>
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
              onChangeHandler={setFilter}
            />
          ))}
        </div>
      )}
    </section>
  );
}
