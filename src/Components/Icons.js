import React from "react";
import nodejs from "../Image/nodejs.png";
import react from "../Image/react.png";
import html from "../Image/html-5.png";
import github from "../Image/github.png";
import css from "../Image/css.png";

export default function Icons() {
  return (
    <div className="iconContainer">
      <img src={react} alt="" />
      <img src={nodejs} alt="" />
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={github} alt="" />
    </div>
  );
}
