import { useContext } from "react";
import ProductContext from "../../../store/ProductContext";

import classes from "./checkout.module.css";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
    const productCtx = useContext(ProductContext);
    const history = useNavigate()
  console.log(productCtx.cartProducts);
  return (
    <div className={classes.checkOut}>
      <div className={classes.title}>Checkout</div>
      <div className={classes.total}>
        Total : 
        <span className={classes.price}> &#8377;
          {productCtx.cartProducts.reduce((accumlator, price) => {
            return Math.ceil(accumlator + price.price);
          }, "")}
        </span>
      </div>
      <button onClick={()=>alert('Paisa Chahiye Mereko', history('/product', {replace: true}))} > Checkout</button>
    </div>
  );
}
