import { useNavigate } from "react-router-dom";

export default function Game({ game }) {
  const navigate = useNavigate();

  function handleClick() {
    // Corrected the template literal usage with backticks
    navigate(`/games/${game.id}`);
  }

  return (
    <article className="game-card" onClick={handleClick}>
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
    </article>
  );
}
