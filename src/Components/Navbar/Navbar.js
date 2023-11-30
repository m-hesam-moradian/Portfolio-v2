import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      {" "}
      <header>
        <a href="#" class="logo">
          <img
            src="https://github.com/m-hesam-moradian/portfolio-V2/blob/main/public/img/logos/logo-removebg-preview.png?raw=true"
            alt=""
          />
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
