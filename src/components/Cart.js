import React from "react";

const Cart = (props) => {
  let totalArea = 0;
  for (let i = 0; i < props.carts.length; i++) {
    const cart = props.carts[i];
    totalArea = totalArea + cart.area;
  }
  return (
    <div>
      <h2>Added Country: {props.carts.length}</h2>
      <h3>Total Area: {totalArea}</h3>
    </div>
  );
};

export default Cart;
