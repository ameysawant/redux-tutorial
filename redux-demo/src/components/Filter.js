import React from "react";

const Filter = ({ products, sendID }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map((product) => {
          const { id, name, price } = product;
          return (
            <li key={id} onClick={() => sendID(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
