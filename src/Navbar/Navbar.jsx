import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-back"></div>
      <nav>
        <div className="nav-width">
          <h1 className="nav-logo">INFORMATIKA</h1>
          {/* <ul>
          <li>
            <Link to="account">Diana</Link>
            <IoPersonOutline size={20} />
          </li>
        </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
