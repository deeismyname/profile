import React from "react";
import profileImage from "../images/prfl.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container text-center text-white">
        <img
          src={profileImage}
          alt="Divine's Photo"
          className="rounded-circle mb-3 profile-image"
        />
        <h1 className="display-4">Hi, I'm Divine</h1>
        <p className="lead">Software Engineer | Backend Specialist | Mentor</p>
        <a href="#portfolio" className="btn btn-light btn-lg mt-3">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
