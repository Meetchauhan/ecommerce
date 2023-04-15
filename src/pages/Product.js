import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import classes from "./product.module.css";
import spinner from "../images/spinnerCube.svg";
import CategoryFilter from "../components/filter/CategoryFilter";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(8);
  const [scrollLoading, setScrollLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    fetch(`https://fakestoreapi.com/products/${filter}?limit=${page}`)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setProduct(data);
        setScrollLoading(false);
      });
  }, [filter, page]);
  console.log(page);
  useEffect(() => {
    if (page <= 20) {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }
  }, [page]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${filter}?limit=8`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  }, [filter]);

  const handleInfiniteScroll = () => {
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setScrollLoading(true);
      setPage((prev) => prev + 8);
    }
  };
  return (
    <section>
      <div className={classes.headingSection}>
        <h1>All Product</h1>
        <CategoryFilter onChangeHandler={setFilter} />
      </div>

      {loading ? (
        <img className={classes.loading} src={spinner} alt="loading" />
      ) : (
        <>
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
          {scrollLoading  && (
            <div className={classes.scoll}>
              <img
                className={classes.scrollLoadings}
                style={{ display: "flex", justifyContent: "center" }}
                src={spinner}
                alt="loading"
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}
