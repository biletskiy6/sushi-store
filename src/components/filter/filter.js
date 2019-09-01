import React from "react";
import "./filter.scss";
const Filter = () => {
  return (
    <div className='filter'>
      <button>Все</button>
      <button>По цене(от дорогих к дешевым)</button>
      <button>По цене(от дешевых к дорогим)</button>
      <button>По новизне</button>
    </div>
  );
};
export default Filter;
