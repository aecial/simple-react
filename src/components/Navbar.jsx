import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        {props.links.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
