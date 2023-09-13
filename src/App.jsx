import { useState } from "react";
import "./App.css";
import Carts from "./Components/Carts/Carts";
import SelectionBoard from "./Components/SelectionBoard/SelectionBoard";

function App() {
  const [hired, setHired] = useState([]);
  const [invested, setInvested] = useState(0);
  const handleHireButton = (id, cart) => {
    const duplicate = hired.find((cast) => cast.id === id);
    if (duplicate) {
      alert(`You have already hired him`);
    } else {
      {
        invested > 30000
          ? `${alert("You have not such budget")}`
          : setInvested(invested + cart.salary);
      }
      setHired([...hired, cart]);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-3xl font-bold">MOVIE MAKING</h1>
        <div className="flex gap-5">
          <Carts handleHireButton={handleHireButton}></Carts>
          <SelectionBoard hired={hired} invested={invested}></SelectionBoard>
        </div>
      </div>
    </>
  );
}

export default App;
