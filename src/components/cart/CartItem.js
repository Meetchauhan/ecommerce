import { useContext } from "react";
import classes from "./cartItem.module.css";
import ProductContext from "../../store/ProductContext";
import removeRed from "../../images/remove.svg";
import notRemoved from "../../images/notRemove.svg";
import { useState } from "react";

export default function CartItem(props) {
  const [remove, setRemove] = useState(false);
  const productCtx = useContext(ProductContext);

  function handleRemoveFromCart() {
    productCtx.removeToCart(props.id);
  }

  function handleMouseOver() {
    setRemove(true);
  }

  function handleMouseLeave() {
    setRemove(false);
  }

  return (
    <div className={classes.cart}>
      <div className={classes.cartInner}>
        <img className={classes.image} src={props.image} alt={props.title} />
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price}>
          <span>&#8377;</span>
          {(Math.ceil(props.price) * 81).toLocaleString("en-IN")}
        </div>
        <div
          className={classes.removeIcon}
          onClick={handleRemoveFromCart}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <img src={remove ? removeRed : notRemoved} alt="removeIcon" />
        </div>
      </div>
    </div>
  );
}
