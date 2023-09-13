import PropTypes from "prop-types";

const Hired = ({ hired }) => {
  return (
    <div className="w-full bg-slate-200 p-5 h-[500px]">
      <h1>Hired : {hired.length}</h1>
      <div className="grid  grid-cols-3 gap-2">
        {hired.map((cast, idx) => (
          <div key={idx}>
            <img className="w-20 rounded-md mb-2 " src={cast.image}></img>
            <p className="text-sm">{cast.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Hired.propTypes = {
  hired: PropTypes.array.isRequired,
};

export default Hired;
