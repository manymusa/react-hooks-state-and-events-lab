import React, {useState} from "react";

function Item({ name, category }) {
  const [item,setItem] = useState(false)

  const liClass = item ? "in-cart" : ""
  const buttonText = item ? "Remove From Cart" : "Add to Cart" 

  function cart(){
    setItem(!item)
  }

  return (
    <li className={liClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {cart}className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
