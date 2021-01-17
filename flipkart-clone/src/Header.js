import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        src="https://static.wixstatic.com/media/c7de0c_4e9f90a28ec8474bbe21d0c8ad56f292~mv2.png/v1/fill/w_600%2Ch_226%2Cal_c%2Cq_90/file.jpg"
        alt="Flipkart Icon"
        className="header--left-icon"
      />
      <input type="text" placeholder="Search..." />
      <button>Login</button>
      <button>More</button>
      <button>Cart</button>
    </div>
  );
}

export default Header;
