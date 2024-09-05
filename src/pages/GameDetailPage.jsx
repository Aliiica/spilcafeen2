import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

export default function UpdatePage() {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("games"); // get data from local storage
    const gamesData = JSON.parse(data) || []; // parse the data from string to javascript array
    const game = gamesData.find((game) => game.id === id); // find the user with the id from the params
    console.log(game);
    setGame(game); // set the user state with the data from local storage
  }, [id]); // <--- "[id]" VERY IMPORTANT!!!

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>{game.name}</h1>
        <Game game={game} />
        <div className="btns">
          <button className="btn-cancel">Delete game</button>
          <button>Update game</button>
        </div>
      </div>
    </div>
  );
}
