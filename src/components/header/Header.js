import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../store/ProductContext";
import classes from "./header.module.css";
// import logo from "../../images/eLogo.png";

export default function Header(props) {
  const [hamOpen, setHamOpen] = useState(false);
  const favoriteCtx = useContext(ProductContext);
  let favCount = favoriteCtx.favoriteProducts.length;
  let cartCount = favoriteCtx.cartProducts.length;

  function toggle() {
    setHamOpen(!hamOpen);
  }
  return (
    <header>
      <div className={classes.container}>
        <nav>
          <div className={classes.logo}>
            <Link className={classes.link} to="/ecommerce">
              Shop
            </Link>
          </div>
          <ul className={classes.desk}>
            <li>
              <Link className={classes.link} to="product">
                Product
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="favorite">
                Favorite{favCount > 0 && <sup>{favCount}</sup>}
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="cart">
                Cart{cartCount > 0 && <sup>{cartCount}</sup>}
              </Link>
            </li>
          </ul>
          <div className={classes.hamburger} onClick={toggle}>
            {props.onHandleHamClick(hamOpen)}
            <div
              className={hamOpen ? classes.activeLine1 : classes.line1}
            ></div>
            <div
              className={hamOpen ? classes.activeLine2 : classes.line2}
            ></div>
            <ul className={hamOpen ? classes.show : classes.hide}>
              <li>
                <Link className={classes.link} to="product">
                  Product
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="favorite">
                  Favorite{favCount > 0 && <sup>{favCount}</sup>}
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="cart">
                  Cart{cartCount > 0 && <sup>{cartCount}</sup>}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
