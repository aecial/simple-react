import React from "react";

const MainSection = () => {
  return (
    <>
      <main>
        <div className="hero-div">
          <div className="hero-pic-container">
            <img
              className="my-pic"
              src="src\assets\my-pic.jpg"
              alt="my-pic"
            ></img>
          </div>
          <div className="btn-div">
            <button className="btn-cop">
              <i class="fa-solid fa-copy"></i>
            </button>
            <button className="btn-next">
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
