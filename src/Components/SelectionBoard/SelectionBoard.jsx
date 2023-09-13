import PropTypes from "prop-types";
import Budget from "../Budget/Budget";
import Hired from "../Hired/Hired";

const SelectionBoard = ({ hired, invested, remaining }) => {
  return (
    <div className="w-1/3 h-[850px] bg-slate-500 p-5  text-xl text-center font-bold">
      <h1 className="mb-10">Selection Board</h1>
      <Budget invested={invested} remaining={remaining}></Budget>
      <Hired hired={hired}></Hired>
    </div>
  );
};

SelectionBoard.propTypes = {
  hired: PropTypes.array.isRequired,
  invested: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default SelectionBoard;
