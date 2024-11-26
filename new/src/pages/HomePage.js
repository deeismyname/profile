import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/styles.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Portfolio from "../components/Projects";
import Contact from "../components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
