import React, { useEffect, useState } from "react";
import "./Stack.css";

const Stack = () => {
  const [newValue, setNewValue] = useState("");
  const [stackList, setStackList] = useState([]);
  const [show, setShow] = useState("");

  const handleChange = () => (event) => {
    setNewValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newValue !== "") {
      setStackList([...stackList, newValue]);
    }
    setNewValue("");
  };

  const removeItem = (e) => {
    e.preventDefault();
    const newList = stackList;
    newList.pop();
    setStackList(newList);
    setNewValue("");
  };

  const ShowTopItem = (e) => {
    e.preventDefault();
    const index = stackList.length - 1;
    setShow(stackList[index]);
  };

  const checkStackSize = (e) => {
    e.preventDefault();
    if (stackList.length === 0) {
      setShow("true");
    } else {
      setShow("false");
    }
  };

  useEffect(() => {}, [stackList]);

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Stack</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          A stack is an Abstract Data Type (ADT), commonly used in most
          programming languages. It is named stack as it behaves like a
          real-world stack, for example – a deck of cards or a pile of plates,
          etc.
          <h3>Description</h3>
          A real-world stack allows operations at one end only. For example, we
          can place or remove a card or plate from the top of the stack only.
          Likewise, Stack allows all data operations at one end only. At any
          given time, we can only access the top element of a stack.
          <br /> <br />
          This feature makes it LIFO data structure. LIFO stands for
          Last-in-first-out. Here, the element which is placed (inserted or
          added) last, is accessed first. In stack terminology, insertion
          operation is called PUSH operation and removal operation is called POP
          operation.
          <h3>Basic Operations</h3>
          Stack operations may involve initializing the stack, using it and then
          de-initializing it. Apart from these basic stuffs, a stack is used for
          the following operations:
          <ul>
            <li>push() − Pushing (storing) an element on the stack.</li>
            <li>pop() - Removing (accessing) an element from the stack.</li>
            <li>
              peek() − get the top data element of the stack, without removing
              it.
            </li>
            <li>isEmpty() − check if stack is empty.</li>
          </ul>
        </div>
        <div className="ItemDemo">
          <h3>Try a stack</h3>
          Add data
          <form action="" autoComplete="off">
            <div className="StackView">
              <div className="StructureView">
                <input
                  type="text"
                  className="StackInput"
                  name="stackvalue"
                  value={newValue}
                  onChange={handleChange()}
                />
                <div className="StructureContainer">
                  {stackList.length !== 0 &&
                    stackList.map((stack, index) => (
                      <div className="StackItem" key={index}>
                        {stack}
                      </div>
                    ))}
                </div>
              </div>
              <div className="StructureControls">
                <button
                  type="submit"
                  className="ControlButton AddBtn"
                  onClick={(e) => handleSubmit(e)}
                >
                  PUSH
                </button>
                <button
                  className="ControlButton RemoveBtn"
                  onClick={(e) => removeItem(e)}
                >
                  POP
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => ShowTopItem(e)}
                >
                  Peek
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => checkStackSize(e)}
                >
                  isEmpty
                </button>
              </div>
            </div>
          </form>
          <div className="InfoSection">
            {show !== "" && <div className="InfoItem">{show}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
