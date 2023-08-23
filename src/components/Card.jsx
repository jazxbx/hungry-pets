export default function Card(props) {
  return (
    <div id="pet-container">
      <div id="pet-emoji">{props.pet.icon}</div>
      <h2>{props.pet.name}</h2>
      <p className="hunger-meter">Hunger</p>
      <meter
        className="hunger-indicator"
        value={props.pet.hunger}
        max="100"
        min="0"
      ></meter>
      <meter
        className="love-indicator"
        value={props.pet.love}
        max="100"
        min="0"
      ></meter>
      <button id="feed-pet-btn">Feed Me 🍞</button>
    </div>
  );
}
