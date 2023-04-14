import { useContext } from "react";
import ProductContext from "../store/ProductContext";
import ProductList from "../components/ProductItem";

export default function Cart() {
  const productCtx = useContext(ProductContext);
  let content;

  if (productCtx.totalCartProduct === 0) {
    content = <p>Cart is Empty</p>;
  } else {
    console.log(productCtx.cartProducts);
    content = productCtx.cartProducts.map((cartItem) => {
      return (
        <ProductList
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          image={cartItem.image}
          price={cartItem.price}
        />
      );
    });
  }

  return <section>{content}</section>;
}
