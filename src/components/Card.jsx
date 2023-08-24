// import { petsData } from "../lib";

export default function Card(props) {
  const pet = props.pet;

  return (
    <div id="pet-card" className="card-style">
      <div id="pet-emoji">{pet.icon}</div>
      <h2>{pet.name}</h2>
      <p className="hunger-meter">Hunger:</p>
      <meter
        className="hunger-indicator"
        value={pet.hunger}
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
      <button id="feed-pet-btn">Feed Me 🍞</button>
    </div>
  );
}
