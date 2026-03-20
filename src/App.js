import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Testimonies from "./components/Testimonies/Testimonies";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default App;
