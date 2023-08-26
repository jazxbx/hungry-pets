import { useState } from "react";
import Card from "./components/Card";
import { petsData } from "./lib";

function App() {
  const [pets, setPets] = useState(petsData);

  return (
    <>
      <h1 id="hungry-pets-header">Hungry Pets</h1>
      <div id="pets-container" className="flex">
        {pets.map((pet) => (
          <div key={pet.id}>
            <Card pet={pet} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
