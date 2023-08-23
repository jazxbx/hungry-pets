export default function Card(props) {
  console.log(props);
  return (
    <div id="pet-container" className="pet-card">
      <p id="emoji" className="pet-emoji">
        {props.pet.icon}
      </p>
      <h2 id="pet-name">{props.pet.name}</h2>
      <p id="hunger-title" className="hunger-title">
        Hunger:
      </p>
      <meter
        id="hunger"
        className="hunger-indicator"
        value={props.pet.hunger}
        max="100"
        min="0"
      ></meter>
      <p id="pet-love-title" className="love-title">
        Love:
      </p>
      <meter
        id="love"
        className="love-indicator"
        value={props.pet.love}
        max="100"
        min="0"
      ></meter>
      <button id="feed-me-button" type="button" className="card-button">
        Feed Me
      </button>
    </div>
  );
}
