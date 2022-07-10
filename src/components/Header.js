import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src="..public/images/troll-face.png"
        className="header-img"
        alt="troll-face"
      />
      <h3 className="header-title">Meme Generator</h3>
      <h4 className="header-mini-title">React Course - Project 3</h4>
    </header>
  );
}
