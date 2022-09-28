import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState('All')

  function idk(event){
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter((item) =>{
    if(selectedCategory === "All"){
      return item
    } else if(item.category === selectedCategory ){
      return item
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={idk}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
