import PropTypes from "prop-types";
import Budget from "../Budget/Budget";
import Hired from "../Hired/Hired";

const SelectionBoard = (props) => {
  return (
    <div className="w-1/3 h-[800px] bg-slate-500 p-5  text-xl text-center font-bold">
      <h1 className="mb-10">Selection Board</h1>
      <Budget></Budget>
      <Hired></Hired>
    </div>
  );
};

SelectionBoard.propTypes = {};

export default SelectionBoard;
