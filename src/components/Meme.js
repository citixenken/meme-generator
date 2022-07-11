import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  let [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    let memesArray = memesData.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let randomURL = memesArray[randomNumber].url;
    setMemeImage(randomURL);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image 🖼{" "}
        </button>
      </div>

      <img src={memeImage} className="meme-image" />
    </main>
  );
}
