import { useState } from "react";
import "./App.css";
import Carts from "./Components/Carts/Carts";
import SelectionBoard from "./Components/SelectionBoard/SelectionBoard";

function App() {
  const [hired, setHired] = useState([]);
  const handleHireButton = (id, cart) => {
    const duplicate = hired.find((cast) => cast.id === id);
    if (duplicate) {
      alert(`You have already hired him`);
    } else {
      setHired([...hired, cart]);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-3xl font-bold">MOVIE MAKING</h1>
        <div className="flex gap-5">
          <Carts handleHireButton={handleHireButton}></Carts>
          <SelectionBoard hired={hired}></SelectionBoard>
        </div>
      </div>
    </>
  );
}

export default App;
