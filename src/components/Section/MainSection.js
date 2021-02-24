import React from "react";
import "../../App.css";
import { Button } from "../Navbar/Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="hero-container">
      <h1>Skylių Gręžimas!</h1>
      <p>Lengva ir paprasta.</p>
      <div className="hero-btns">
        <Button
          to="/services"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Kainynas
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
