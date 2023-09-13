import PropTypes from "prop-types";

const Cart = ({ cart, handleHireButton }) => {
  const { id, image, name, role, salary } = cart;
  return (
    <div className=" cart-div p-10 space-y-3  bg-slate-500  rounded-lg mx-auto">
      <img src={image}></img>
      <h1 className="text-xl font-bold ">{name}</h1>
      <div className="flex justify-center gap-3 font-bold">
        <h3>{role}</h3>
        <h3>{salary} $</h3>
      </div>
      <div className="text-center ">
        <button
          onClick={() => handleHireButton(id, cart)}
          className=" mx-auto btn bg-red-400 px-10 py-2 font-bold text-white rounded-md"
        >
          Hire
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleHireButton: PropTypes.func.isRequired,
};

export default Cart;
