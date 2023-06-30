import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        {people.map((person) => {
          const { image, name, id, age } = person;
          return (
            <article className="person">
              <img src={image} alt={name} className="img" />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>

              <button
                type="button"
                className="btn"
                onClick={() => removeItem(id)}
              >
                remove
              </button>
            </article>
          );
        })}
        <button
          className="btn btn-block"
          type="button"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}
export default App;

// import React, { useState } from "react";
// import { data } from "../data";

// const UseStateArray = () => {
//   const [people, setPeople] = useState(data);
//   const removeItem = (id) => {
//     setPeople(people.filter((person) => person.id !== id));
//   };
//   const clearAll = () => {
//     setPeople([]);
//   };

//   return (

//             <button
//               className="btn"
//               type="button"
//               onClick={() => removeItem(id)}
//             >
//               remove
//             </button>

//         );
//       })}
