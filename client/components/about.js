import React from "react";

export const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <p>
          Greetings! I’m a full stack software engineer currently working at
          <a href="https://cedrus.digital/">Cedrus Digital</a>. I'm an endlessly
          curious problem solver, motivated by novel challenges, elegant design,
          and clean code. I attended Fullstack Academy with a full scholarship
          through the NYC Tech Talent Pipeline. Before starting my career as a
          software engineer, I worked as a music producer and audio engineer in
          a professional recording studio, where I consistently delivered a
          stellar product while nurturing positive client relationships.
        </p>
      </div>
      <div id="resume">
        <a href="/resume.pdf"> View Resume </a>
      </div>
    </div>
  );
};
