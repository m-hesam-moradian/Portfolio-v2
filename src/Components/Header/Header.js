import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <section class="home" id="home">
        <div class="home-text">
          <h4>hello</h4>
          <h1>
            I'M <br />
            <span>M</span>.Hesam <br />
            moradian
          </h1>
          <h3>Front-end Developer</h3>
          <a href="#contact" class="btn">
            My Resume
          </a>
        </div>
        <div class="home-img">
          <img
            src="https://github.com/m-hesam-moradian/portfolio-V2/blob/main/public/img/bg.png?raw=true"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
