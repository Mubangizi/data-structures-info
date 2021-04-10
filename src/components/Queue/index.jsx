import React, { useEffect, useState } from "react";
import "./Queue.css";

const Queue = () => {
  const [newValue, setNewValue] = useState("");
  const [queueList, setQueueList] = useState([]);
  const [show, setShow] = useState("");

  const handleChange = () => (event) => {
    setNewValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queueList.length >= 10) {
      setShow("Queue is at its max (10)");
      setNewValue("");
      return;
    }
    if (newValue !== "") {
      setQueueList([...queueList, newValue]);
    }
    setNewValue("");
  };

  const dequeueItem = (e) => {
    e.preventDefault();
    const newList = queueList;
    newList.splice(0, 1);
    setQueueList(newList);
  };

  const showFrontItem = (e) => {
    e.preventDefault();
    setShow(queueList[0]);
  };

  const checkQueueSize = (e) => {
    e.preventDefault();
    if (queueList.length === 0) {
      setShow("true");
    } else {
      setShow("false");
    }
  };

  const checkQueueFull = (e) => {
    e.preventDefault();
    if (queueList.length >= 10) {
      setShow("true");
    } else {
      setShow("false");
    }
  };

  const getQueueSize = (e) => {
    e.preventDefault();
    setShow(queueList.length);
  };

  useEffect(() => {}, [queueList]);

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Queue</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          Queue is an abstract data structure, somewhat similar to Stacks.
          Unlike stacks, a queue is open at both its ends. One end is always
          used to insert data (enqueue) and the other is used to remove data
          (dequeue). Queue follows First-In-First-Out methodology, i.e., the
          data item stored first will be accessed first.
          <h3>Description</h3>
          As we now understand that in queue, we access both ends for different
          reasons.A real-world example of queue can be a single-lane one-way
          road, where the vehicle enters first, exits first.
          <br /> <br />
          As in stacks, a queue can also be implemented using Arrays,
          Linked-lists, Pointers and Structures. For the sake of simplicity, we
          shall implement queues using one-dimensional array.
          <h3>Basic Operations</h3>
          Queue operations may involve initializing or defining the queue,
          utilizing it, and then completely erasing it from the memory:
          <ul>
            <li>enqueue() − add (store) an item to the queue.</li>
            <li>dequeue() − remove (access) an item from the queue.</li>
            <li>
              peek() − Gets the element at the front of the queue without
              removing it.
            </li>
            <li>isfull() − Checks if the queue is full.</li>
            <li>isEmpty() − check if queue is empty.</li>
            <li>
              size() - returns the number of items on the queue. It needs no
              parameters and returns an integer.
            </li>
          </ul>
        </div>
        <div className="ItemDemo">
          <h3>Try a Queue (Max items = 10)</h3>
          <form action="" autoComplete="off">
            <div className="StackView">
              <div className="StructureView">
                <input
                  type="text"
                  className="StackInput"
                  name="stackvalue"
                  value={newValue}
                  onChange={handleChange()}
                  placeholder="Enter item here"
                />
                <div className="StructureContainer">
                  {queueList.length !== 0 &&
                    queueList.map((stack, index) => (
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
                  enqueue
                </button>
                <button
                  className="ControlButton RemoveBtn"
                  onClick={(e) => dequeueItem(e)}
                >
                  dequeue
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => showFrontItem(e)}
                >
                  peek
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => checkQueueFull(e)}
                >
                  isFull
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => checkQueueSize(e)}
                >
                  isEmpty
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => getQueueSize(e)}
                >
                  size
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

export default Queue;
