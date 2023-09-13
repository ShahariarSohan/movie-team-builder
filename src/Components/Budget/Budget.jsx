import PropTypes from "prop-types";

const Budget = ({ invested, remaining }) => {
  return (
    <div className="w-full p-5 bg-slate-200 space-y-5 mb-10">
      <h1>
        Total Budget:<span>30000</span>$
      </h1>
      <h1>
        Remaining:<span>{remaining}</span>$
      </h1>
      <h1>
        Invested :<span>{invested}</span>$
      </h1>
    </div>
  );
};

Budget.propTypes = {
  invested: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Budget;
