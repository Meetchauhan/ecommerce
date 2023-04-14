import { useContext } from "react";
import ProductContext from "../store/ProductContext";
import classes from "./productItem.module.css";
import blankImage from "../images/blank.png";
import favorite from "../images/fav.svg";
import notFavorite from "../images/notFav.svg";

export default function ProductItem(props) {
  const productCtx = useContext(ProductContext);

  const productIsFavorite = productCtx.isProductToFavorite(props.id);
  const productInCart = productCtx.isProductTocart(props.id);

  function handleAddFavorite() {
    if (productIsFavorite) {
      productCtx.removeToFavorite(props.id);
    } else {
      productCtx.addToFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      });
    }
  }

  function handleAddToCart() {
    if (productInCart) {
      productCtx.removeToCart(props.id);
    } else {
      productCtx.addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      });
    }
  }
  return (
    <div className={classes.item}>
      <div className={classes.itemInner}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <img className={classes.img} src={blankImage} alt={props.title} />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.priceSection}>
            <div className={classes.price}>
              <span>
                <span>&#8377;</span>
              </span>
              {Math.ceil(props.price)}
            </div>
            <img
              src={productIsFavorite ? favorite : notFavorite}
              alt={favorite}
              onClick={handleAddFavorite}
              className={classes.favLogo}
            />
          </div>
          <button onClick={handleAddToCart} className={classes.cartBtn}>
            {productInCart ? "Remove Cart" : "Add to cart"}
          </button>
          {/* <button onClick={handleAddFavorite}>
            {productIsFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button> */}
        </div>
      </div>
    </div>
  );
}
