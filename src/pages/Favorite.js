import { useContext } from "react";
import ProductContext from "../store/ProductContext";
import ProductList from "../components/ProductItem";
import classes from "./favorite.module.css";

export default function Favorite() {
  const productCtx = useContext(ProductContext);

  let content;

  if (productCtx.totalFavoriteProduct === 0) {
    content = <p>There is no item in Favorites </p>;
  } else {
    console.log(productCtx.favoriteProducts);
    content = productCtx.favoriteProducts.map((favItem) => {
      return (
        <ProductList
          key={favItem.id}
          id={favItem.id}
          title={favItem.title}
          image={favItem.image}
          price={favItem.price}
        />
      );
    });
  }
  return (
    <section>
      <h1>Favorites</h1>
      <div className={classes.favorite}>{content}</div>
    </section>
  );
}
