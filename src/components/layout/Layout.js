import Header from "../header/Header";
import { useState } from "react";
import classes from "./layout.module.css";


export default function Layout(props) {
  const [mobileMenu, setMobileMenu] = useState(true);
  return (
    <>
      <Header onHandleHamClick={setMobileMenu} />
      <div className={mobileMenu === true ? classes.hide : classes.main} >{props.children}</div>
    </>
  );
}
