import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  //   let [memeImage, setMemeImage] = React.useState(
  //     "https://i.imgflip.com/26am.jpg"
  //   );
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26am.jpg",
  });

  let [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let randomURL = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomURL,
      };
    });
    // setMemeImage(randomURL);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}
