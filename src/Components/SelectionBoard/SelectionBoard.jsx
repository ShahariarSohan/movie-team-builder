import PropTypes from "prop-types";
import Budget from "../Budget/Budget";
import Hired from "../Hired/Hired";

const SelectionBoard = ({ hired }) => {
  return (
    <div className="w-1/3 h-[850px] bg-slate-500 p-5  text-xl text-center font-bold">
      <h1 className="mb-10">Selection Board</h1>
      <Budget></Budget>
      <Hired hired={hired}></Hired>
    </div>
  );
};

SelectionBoard.propTypes = {
  hired: PropTypes.array.isRequired,
};

export default SelectionBoard;
