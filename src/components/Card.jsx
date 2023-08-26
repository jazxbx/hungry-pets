import { useState } from "react";
import { petsData } from "../lib";

// import { petsData } from "../lib";
export default function Card({ pet }) {
  //use state to change pet hunger
  const [petHunger, setPetHunger] = useState(petsData);
  // Feed me btn
  const handleOnClick = (petId) => {
    console.log("clicked pet:" + pet.id);

    const updatedHunger = petHunger.map((pet) =>
      pet.id === petId ? { ...pet, hunger: 0 } : pet
    );
    setPetHunger(updatedHunger);
  };

  const petHungerLevel = petHunger.find((p) => p.id === pet.id)?.hunger || 0;

  return (
    <div id="pet-card" className="card-style">
      <div id="pet-emoji">{pet.icon}</div>
      <h2>{pet.name}</h2>
      <p className="hunger-meter">Hunger:</p>
      <meter
        className="hunger-indicator"
        // value={pet.hunger}
        value={petHungerLevel}
        max="100"
        min="0"
      ></meter>
      <p>Love:</p>
      <meter
        className="love-indicator"
        value={pet.love}
        max="100"
        min="0"
      ></meter>
      <button
        onClick={() => {
          handleOnClick(pet.id);
        }}
        id="feed-pet-btn"
        key={pet.id}
      >
        Feed Me 🍞
      </button>
    </div>
  );
}
