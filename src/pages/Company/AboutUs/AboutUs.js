import React from "react";
import About from "../../../pages/Company/AboutUs/About";
import Section from "../../../pages/Company/AboutUs/Section";
import Counter from "../../../pages/Company/AboutUs/Counter";
import Features from "../../../pages/Company/AboutUs/Features";
import Team from "../Team/Team";

const AboutUs = () => {
  document.title = "About Us | NextGenJob - Code Canva Team | NextGenJob";
  return (
    <React.Fragment>
      <Section />
      <About />
      <Counter />
      <Features />
      <Team/>
    </React.Fragment>
  );
};

export default AboutUs;
