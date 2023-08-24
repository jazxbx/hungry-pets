// import { useState } from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import { petsData } from "./lib";

function App() {
  // // setting initial state to empty
  // const [pets, setPets] = useState([]);

  return (
    <div>
      <h1 id="hungry-pets-header">Hungry Pets</h1>
      <div id="pets-container" className="flex">
        {petsData.map((pet) => (
          <div key={pet.id}>
            <Card pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
