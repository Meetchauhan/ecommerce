import { useState } from "react";
import Select from "react-select";
import classes from "./categoryFilter.module.css";

export default function CategoryFilter(props) {
  const [filter, setFilter] = useState("");

  const option = [
    { value: "category/electronics", label: "Electronics" },
    { value: "category/jewelery", label: "Jewelery" },
    { value: "category/men's clothing", label: "Men's Clothing" },
    { value: "category/women's clothing", label: "Women's Clothing" },
  ];

  function handleChange(e) {
    setFilter(e.value);
  }
  return (
    <div className={classes.filter}>
      <Select options={option} onChange={handleChange} />
      {props.onChangeHandler(filter)}
    </div>
  );
}
