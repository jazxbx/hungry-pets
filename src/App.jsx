import { useState, useEffect } from "react";
import Card from "./components/Card";
import { petsData } from "./lib";

function App() {
  const [pets, setPets] = useState(petsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPets((prevPets) => {
        // make a copy of state
        const updatedPets = prevPets.map((pet) => ({
          ...pet,
          // update hunger and love
          hunger: pet.hunger + 0.1,
          love: pet.love - 0.1,
        }));
        return updatedPets;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
