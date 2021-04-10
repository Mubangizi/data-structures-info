import React, { useState } from "react";
import Layout from "../Layout";
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
        <content className={`ItemContent ${showContent(2)}`}>
          <h2 className="ItemHeading">Array</h2>
          <div className="ItemDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, optio nemo tempora deserunt libero ut nihil cum
            dignissimos, saepe blanditiis reprehenderit assumenda sit id officia
            vero quae quidem pariatur nostrum.
          </div>
        </content>
        <content className={`ItemContent ${showContent(1)}`}>
          <h1 className="ItemHeading">Stack</h1>
          <div className="SideLine">
            <div className="ItemDescription ">
              A stack is an Abstract Data Type (ADT), commonly used in most
              programming languages. It is named stack as it behaves like a
              real-world stack, for example – a deck of cards or a pile of
              plates, etc.
              <h3>Description</h3>
              A real-world stack allows operations at one end only. For example,
              we can place or remove a card or plate from the top of the stack
              only. Likewise, Stack allows all data operations at one end only.
              At any given time, we can only access the top element of a stack.
              <br /> <br />
              This feature makes it LIFO data structure. LIFO stands for
              Last-in-first-out. Here, the element which is placed (inserted or
              added) last, is accessed first. In stack terminology, insertion
              operation is called PUSH operation and removal operation is called
              POP operation.
              <h3>Basic Operations</h3>
              Stack operations may involve initializing the stack, using it and
              then de-initializing it. Apart from these basic stuffs, a stack is
              used for the following operations:
              <ul>
                <li>push() − Pushing (storing) an element on the stack.</li>
                <li>pop() - Removing (accessing) an element from the stack.</li>
                <li>
                  peek() − get the top data element of the stack, without
                  removing it.
                </li>
                <li>isEmpty() − check if stack is empty.</li>
              </ul>
            </div>
            <div className="ItemDemo">
              <h3>Try a stack</h3>
            </div>
          </div>
        </content>
        <content className={`ItemContent ${showContent(3)}`}>
          <h2 className="ItemHeading">Queue</h2>
          <div className="ItemDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, optio nemo tempora deserunt libero ut nihil cum
            dignissimos, saepe blanditiis reprehenderit assumenda sit id officia
            vero quae quidem pariatur nostrum.
          </div>
        </content>
      </div>
    </Layout>
  );
};

export default DatastructuresPage;
