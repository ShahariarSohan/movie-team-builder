import PropTypes from "prop-types";

const Budget = (props) => {
  return (
    <div className="w-full h-[300px] bg-slate-200 space-y-5 mb-10">
      <h1 className=" ">
        Budget:<span>20000</span>$
      </h1>
    </div>
  );
};

Budget.propTypes = {};

export default Budget;
