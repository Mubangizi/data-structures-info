import React, { useState } from "react";
import BinarySearch from "../BinarySearch";
import Layout from "../Layout";

const SearchingPage = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { name: "Linear Search", id: 1 },
    { name: "binary Search", id: 2 },
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
          <h1 className="Heading">Searching Algorithms</h1>
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
          <BinarySearch />
        </content>
        <content className={`ItemContent ${showContent(2)}`}>
          <BinarySearch />
        </content>
      </div>
    </Layout>
  );
};

export default SearchingPage;
