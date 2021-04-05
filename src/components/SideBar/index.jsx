import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const sendToHome = () => {
    history.push("/");
  };
  return (
    <div className="SideBar">
      <div className="SideBarHeader">Data Structures and Algorithms</div>
      <div className="NavItems">
        <NavLink to={{ pathname: `/` }} exact={true}>
          Home
        </NavLink>
        <NavLink to={{ pathname: `/about` }}>Basic data structures</NavLink>
        <NavLink to={{ pathname: `/trees` }}>Trees</NavLink>
        <NavLink to={{ pathname: `/sorting` }}>Sorting Algorithms</NavLink>
        <NavLink to={{ pathname: `/searching` }}>Searching Algorithms</NavLink>
        <NavLink to={{ pathname: `/graphs` }}>Basic graphs</NavLink>
      </div>
      <div className="RemarksSection">
        <p>© 2021 DSA GROUP 12 EVE</p>
      </div>
    </div>
  );
};

export default SideBar;
