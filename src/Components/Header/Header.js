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
          <a href="pdf/Mohammad Hesam Moradian.pdf" class="btn">
            download my CV
          </a>
        </div>
        <div class="home-img">
          <img src="./portfolio-V2/img/bg.png" alt="" />
        </div>
      </section>
    </div>
  );
}
