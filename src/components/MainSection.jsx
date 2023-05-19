import React from "react";
import Fetch from "./Fetch";

const MainSection = () => {
  return (
    <>
      <main>
        <div className="hero-div">
          <div className="hero-pic-container">
            <Fetch />
          </div>
          <div className="btn-div">
            <button className="btn-copy">
              <i className="fa-solid fa-copy"></i>
            </button>
            <button className="btn-next">
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
