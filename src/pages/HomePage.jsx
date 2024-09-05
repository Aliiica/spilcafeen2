import { useEffect, useState } from "react";
import Game from "../components/Game";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();

    async function getGames() {
      const data = localStorage.getItem("games");

      let gamesData = [];

      if (data) {
        gamesData = JSON.parse(data);
      } else {
        gamesData = await fetchGames();
      }

      console.log("Games Data:", gamesData);

      gamesData.sort((game1, game2) => game1.title.localeCompare(game2.title));

      setGames(gamesData);
    }
  }, []);

  async function fetchGames() {
    try {
      const response = await fetch(
        "https://spilcafeen.alicainmultimedia.dk/wp-json/wp/v2/games?acf_format=standard"
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const formattedGames = data.map((game) => ({
        id: game.id,
        title: game.title.rendered,
        description: game.acf?.description || "No description available",
        image:
          game.acf?.image?.url || "https://placehold.co/600x400?text=No+image",
      }));

      localStorage.setItem("games", JSON.stringify(formattedGames));
      return formattedGames;
    } catch (error) {
      console.error("Failed to fetch games:", error);
      return [];
    }
  }

  return (
    <div className="page">
      <section className="grid">
        {games.length > 0 ? (
          games.map((game) => <Game key={game.id} game={game} />)
        ) : (
          <p>No games available</p>
        )}
      </section>
    </div>
  );
}
