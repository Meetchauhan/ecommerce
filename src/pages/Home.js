import { Link } from "react-router-dom";
import classes from "./home.module.css";
export default function Home() {
    
  return (
    <>
      <h1>Home Page</h1>
      <div className={classes.content}>
        <h2 className={classes.h2}>Welcome to my shop</h2>
        <h3 className={classes.h3}>Chooes the product From Here...</h3>
        <img
          src="https://www.animatedimages.org/data/media/111/animated-arrow-image-0267.gif"
          border="0"
          alt="arrow"
        />
        <Link className={classes.product} to="/product">
          Click here...
        </Link>
      </div>
    </>
  );
}
