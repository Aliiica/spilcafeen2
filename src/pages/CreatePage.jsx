import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCancel() {
    navigate(-1); // Go back to the previous page
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newGame = {
      id: Date.now().toString(), // create a unique id
      title,
      description,
      image,
    };

    console.log(newGame);

    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];

    gamesData.push(newGame); // Corrected typo here
    localStorage.setItem("games", JSON.stringify(gamesData));

    navigate("/"); // Navigate to home page
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Create New Game</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Type a title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Type a description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            placeholder="Paste image URL"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
                : "https://placehold.co/600x400?text=Paste+an+image+URL"
            }
            alt="Choose"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400?text=Error+loading+image")
            }
          />

          <div className="btns">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
