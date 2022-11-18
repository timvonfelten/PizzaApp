import logo from "./logo.svg";
import Portions from "./components/Portions";
import { useState } from "react";
import Ingredients from "./components/Ingredients";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [portions, setPortions] = useState(10);
  const [ingredients, setIngredients] = useState({});

  const [view, setView] = useState(true);

  return (
    <div className="m-10">
      <div className="tracking-wider border-2">
        <button className="bg-red-300 p-2" onClick={() => setView(!view)}>
          Portionen ändern
        </button>
        <div className={view ? "hidden" : "visible"}>
          <Portions
            className="m-20"
            portions={portions}
            setPortions={setPortions}
          />
        </div>
      </div>
      <br></br>
      Anzahl Portionen: {portions} <br></br>
      <Ingredients portions={portions} setIngredients={setIngredients} />
      <hr></hr>
      <h1>Checkliste</h1>
      <ShoppingList
        category="Einkaufsliste"
        ingredients={ingredients}
      ></ShoppingList>
      {/* <button onClick={print}>Print</button> */}
    </div>
  );
}

export default App;
