import React from "react";
import SideBar from "../SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
