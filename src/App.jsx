import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      icon: "🦉",
      name: "Owliver",
      hunger: 5,
      love: 95,
      isAlive: true,
      epitaph: "In the silence of the night, your wisdom echoes.",
    },

    {
      id: 2,
      icon: "🦔",
      name: "Prickle",
      hunger: 15,
      love: 85,
      isAlive: true,
      epitaph: "Among the leaves, your gentle spirit rustles.",
    },

    {
      id: 3,
      icon: "🪨",
      name: "Rockwell",
      hunger: 0,
      love: 100,
      isAlive: true,
      epitaph: "Solid as stone, your memory stands unshaken.",
    },

    {
      id: 4,
      icon: "🤖",
      name: "Baymax",
      hunger: 0,
      love: 100,
      isAlive: true,
      epitaph: "In the realm of circuits, your digital heart pulses.",
    },

    {
      id: 5,
      icon: "👻",
      name: "Chocoboo",
      hunger: 0,
      love: 100,
      isAlive: true,
      epitaph: "Vanished from sight, your presence haunts our thoughts.",
    },

    {
      id: 6,
      icon: "🦋",
      name: "Seraphina",
      hunger: 10,
      love: 90,
      isAlive: true,
      epitaph: "Your grace dances on the winds of eternity.",
    },

    {
      id: 7,
      icon: "🦄",
      name: "Skittles",
      hunger: 20,
      love: 80,
      isAlive: true,
      epitaph: "In the warmth of the sun, your scales shimmer.",
    },

    {
      id: 8,
      icon: "🦐",
      name: "Crackers",
      hunger: 25,
      love: 75,
      isAlive: true,
      epitaph: "Beneath the waves, your tiny presence leaves ripples.",
    },

    {
      id: 9,
      icon: "🐧",
      name: "Mumble",
      hunger: 15,
      love: 85,
      isAlive: true,
      epitaph: "In the icy expanse, your waddle warms our hearts.",
    },

    {
      id: 10,
      icon: "😺",
      name: "Whiskers",
      hunger: 10,
      love: 90,
      isAlive: true,
      epitaph: "Purring softly, your memory cuddles close.",
    },
  ]);

  return (
    <>
      <div>
        <h1 id="hungry-pets-header">Hungry Pets</h1>
        <div id="pets-container">
          {pets.map((pet) => {
            return (
              <div key={pet.id}>
                <Card pet={pet} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
