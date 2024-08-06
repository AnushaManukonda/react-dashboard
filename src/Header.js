import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsFillGearFill,
} from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header">
        <div className="menu-icon">
          <BsJustify className="icon" />
        </div>
        <div className="header-left">
          <BsSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-right">
          <BsFillEnvelopeFill className="icon" />
          <BsFillGearFill className="icon" />
          <BsFillBellFill className="icon" />

          <BsPersonCircle className="icon" />
        </div>
      </header>
    </>
  );
}

export default Header;
