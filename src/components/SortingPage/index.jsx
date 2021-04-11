import React, { useState } from "react";
import ArrayComponent from "../ArrayComponent";
import BubbleSort from "../BubbleSort";
import Layout from "../Layout";
import ListComponent from "../ListComponent";
import Queue from "../Queue";
import Stack from "../Stack";
import "./SortingPage.css";

const SortingPage = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { name: "Bubble Sort", id: 1 },
    { name: "Merge Sort", id: 2 },
    { name: "Quick Sort", id: 3 },
    { name: "Insertion Sort", id: 4 },
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
          <h1 className="Heading">Sorting Algorithms</h1>
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
          <BubbleSort />
        </content>
        <content className={`ItemContent ${showContent(2)}`}></content>
        <content className={`ItemContent ${showContent(3)}`}></content>
        <content className={`ItemContent ${showContent(4)}`}></content>
      </div>
    </Layout>
  );
};

export default SortingPage;
