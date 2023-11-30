import React from "react";

export default function ContactUs() {
  return (
    <div>
      {" "}
      <section class="contact" id="contact">
        <div class="contact-text">
          <h2>Contact Me</h2>
          <h4>Let's Work Together</h4>
          <p></p>
          <div class="contact-list">
            <li>
              <a href="#">ardabil - iran</a>
            </li>
            <li>
              <a href="#">m.hesam.moradian@gmail.com</a>
            </li>
            <li>
              <a href="#">+98-930-124-0226</a>
            </li>
          </div>
          <div class="contact-icons">
            <a href="https://www.linkedin.com/in/m-hesam-moradian-8a288a185">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/m-hesam-moradian">
              <i class="bx bxl-github"></i>
            </a>
            <a href="https://t.me/m_hesam_moradian">
              <i class="bx bxl-telegram"></i>
            </a>
            <a href="">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://codepen.io/m-hesam-moradian">
              <i class="bx bxl-codepen"></i>
            </a>
          </div>
        </div>
        <div class="contact-form">
          <form action="">
            <input type="" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="" placeholder="Enter Your Subject" required />
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <input type="submit" value="submit" class="send" />
          </form>
        </div>
      </section>
      {/* <!-- footer  --> */}
      <footer class="last-text">
        <p>
          Developed with pure html css javaScript by M.Hesam moradian © 2023
        </p>
      </footer>
      {/* <!-- scroll top --> */}
      <a href="#" class="top">
        <i class="bx bxs-chevron-up"></i>
      </a>
    </div>
  );
}
