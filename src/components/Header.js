import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src="https://snipstock.com/assets/cdn/png/117fe30463018af9e2e8459ddb6d865a.png"
        // src="../../public/images/troll.png"
        className="header-img"
        alt="troll-face"
      />
      <h3 className="header-title">Meme Generator</h3>
      <h4 className="header-mini-title">React Course - Project 3</h4>
    </header>
  );
}
