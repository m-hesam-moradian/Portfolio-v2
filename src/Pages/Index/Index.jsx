import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "../../Components/Projects/Projects";
import SoftSkills from "../../Components/SoftSkills/SoftSkills";
import ContactUs from "../../Components/ContactUs/ContactUs";
import "./Index.css";
export default function Index() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <SoftSkills />
      <ContactUs />
    </>
  );
}
