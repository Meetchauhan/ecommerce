import { useContext } from "react";
import ProductContext from "../store/ProductContext";
import CartItem from "../components/cart/CartItem";
import classes from "./cart.module.css";
import CheckOut from "../components/cart/checkout/CheckOut";
export default function Cart() {
  const productCtx = useContext(ProductContext);
  let content;

  if (productCtx.totalCartProduct === 0) {
    content = <h1>Cart is Empty</h1>;
  } else {
    console.log(productCtx.cartProducts);
    content = productCtx.cartProducts.map((cartItem) => {
      return (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          image={cartItem.image}
          price={cartItem.price}
        />
      );
    });
  }

  return (
    <section>
      <div className={classes.cartSec}>
        <div className={classes.cartInner}> {content}</div>
        {productCtx.cartProducts.length > 0 && <CheckOut />}
      </div>
    </section>
  );
}
