import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="SideBarHeader">
        <Link to="/">Data Structures and Algorithms</Link>
      </div>
      <div className="NavItems">
        <NavLink to={{ pathname: `/` }} exact={true}>
          Home
        </NavLink>
        <NavLink to={{ pathname: `/data_structures` }}>
          Basic data structures
        </NavLink>
        <NavLink to={{ pathname: `/sorting` }}>Sorting Algorithms</NavLink>
        <NavLink to={{ pathname: `/functions` }}>Other functions</NavLink>
        <NavLink to={{ pathname: `/searching` }}>Searching Algorithms</NavLink>
        {/* <NavLink to={{ pathname: `/graphs` }}>Basic graphs</NavLink> */}
      </div>
      <div className="RemarksSection">
        <p>© 2021 DSA GROUP 12 EVE</p>
      </div>
    </div>
  );
};

export default SideBar;
