import "./App.css";
import Carts from "./Components/Carts/Carts";
import SelectionBoard from "./Components/SelectionBoard/SelectionBoard";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-3xl font-bold">MOVIE MAKING</h1>
        <div className="flex gap-5">
          <Carts></Carts>
          <SelectionBoard></SelectionBoard>
        </div>
      </div>
    </>
  );
}

export default App;
