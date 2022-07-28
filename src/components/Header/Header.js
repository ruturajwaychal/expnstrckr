import React from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            Expenses Tracker
            <BsCreditCard2Back className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
