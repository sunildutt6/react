import React from "react";

const Categories = ({ categories, filteredItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            key={category}
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
