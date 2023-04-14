import { createContext, useState } from "react";

const ProductContext = createContext({
  favoriteProducts: [],
  cartProducts: [],
  totalFavoriteProduct: 0,
  totalCartProduct: 0,
  addToFavorite: (product) => {},
  removeToFavorite: (productId) => {},
  isProductToFavorite: (productId) => {},
  addToCart: (product) => {},
  removeToCart: (productId) => {},
  isProductTocart: (productId) => {},
});

export function AllProductProvider(props) {
  const [favProducts, setFavProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  function HandleAddFavProduct(product) {
    setFavProducts((preProduct) => {
      return preProduct.concat(product);
    });
  }

  function HandleRemoveFavProduct(productId) {
    setFavProducts((preProduct) => {
      return preProduct.filter((product) => product.id !== productId);
    });
  }

  function HandleIsProductFavorite(productId) {
    return favProducts.some((product) => product.id === productId);
  }

  function HandleAddCartProduct(product) {
    setCartProduct((preProduct) => {
      return preProduct.concat(product);
    });
  }

  function HandleRemoveCartProduct(productId) {
    setCartProduct((preProduct) => {
      return preProduct.filter((product) => product.id !== productId);
    });
  }

  function HandleIsProductInCart(productId) {
    return cartProduct.some((product) => product.id === productId);
  }

  const context = {
    favoriteProducts: favProducts,
    cartProducts: cartProduct,
    totalFavoriteProduct: favProducts.length,
    totalCartProduct: cartProduct.length,
    addToFavorite: HandleAddFavProduct,
    removeToFavorite: HandleRemoveFavProduct,
    isProductToFavorite: HandleIsProductFavorite,
    addToCart: HandleAddCartProduct,
    removeToCart: HandleRemoveCartProduct,
    isProductTocart: HandleIsProductInCart,
  };
  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
