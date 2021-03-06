import React, { useState } from "react";
import Layout from "../Layout";
import "./FunctionsPage.css";
import Fibonnacci from "../Fibonnacci";
import Factorial from "../Factorial";
import TowerOfHanoi from "../TowerOfHanoi";

const FunctionsPage = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { name: "Fibonacci Sequence", id: 1 },
    { name: "Factorial ", id: 2 },
    { name: "Tower Of Hanoi", id: 3 },
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
          <h1 className="Heading">Other Functions</h1>
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
          <Fibonnacci />
        </content>
        <content className={`ItemContent ${showContent(2)}`}>
          <Factorial />
        </content>
        <content className={`ItemContent ${showContent(3)}`}>
          <TowerOfHanoi/>
        </content>
      </div>
    </Layout>
  );
};

export default FunctionsPage;
