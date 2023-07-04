import React, { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const allCategories = ["all", ...tempSet];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Categories categories={categories} filteredItems={filteredItems} />
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
