import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="cart-container w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart}></Cart>
      ))}
    </div>
  );
};

Carts.propTypes = {};

export default Carts;
