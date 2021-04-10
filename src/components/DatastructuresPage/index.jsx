import React, { useState } from "react";
import ArrayComponent from "../ArrayComponent";
import Layout from "../Layout";
import Queue from "../Queue";
import Stack from "../Stack";
import "./DatastructuresPage.css";

const DatastructuresPage = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { name: "Array", id: 1 },
    { name: "Stack", id: 2 },
    { name: "Queue", id: 3 },
    { name: "Lists", id: 4 },
  ];

  const checkActive = (id) => {
    if (id === active) {
      return "ItemActive";
    }
  };
  const showContent = (id) => {
    if (id === active) {
      return "ShowContent";
    }
  };

  return (
    <Layout>
      <div className="DatastructuresPage">
        <header className="MainHeader">
          <h1 className="Heading">Data Structures</h1>
          <div className="HeaderMenuItems">
            {menuItems.map((item) => (
              <div
                className={`MenuItem ${checkActive(item.id)}`}
                onClick={() => {
                  setActive(item.id);
                }}
                key={item.id}
              >
                {item.name}
              </div>
            ))}
          </div>
        </header>
        <content className={`ItemContent ${showContent(1)}`}>
          <ArrayComponent />
        </content>
        <content className={`ItemContent ${showContent(2)}`}>
          <Stack />
        </content>
        <content className={`ItemContent ${showContent(3)}`}>
          <Queue />
        </content>
      </div>
    </Layout>
  );
};

export default DatastructuresPage;
