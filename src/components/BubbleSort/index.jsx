import React, { useState } from "react";
import "./BubbleSort.css";
import ImageIllustration from "../../assets/Bubble-sort-example-300px.gif";

const BubbleSort = () => {
  const [newValue, setNewValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [sorted, setSorted] = useState([]);

  const handleChange = () => (event) => {
    setNewValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newValue !== "") {
      setItemList([...itemList, newValue]);
    }
    setNewValue("");
  };

  const clearItemList = (e) => {
    e.preventDefault();
    setItemList([]);
    setSorted([]);
  };

  const sortItemList = (e) => {
    e.preventDefault();
    let newArray = [...itemList];
    let swapped;
    const n = newArray.length;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          const temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          swapped = true;
        }
      }
      if (swapped === false) {
        break;
      }
    }

    setSorted(newArray);
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Bubble Sort</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          Bubble Sort is the simplest sorting algorithm that works by repeatedly
          swapping the adjacent elements if they are in wrong order.
          <h3>
            Illustration: {"{"}6 5 3 1 8 7 2 4{"}"}
          </h3>
          <img src={ImageIllustration} alt="" />
          <h3>
            Example: {"{"}5 1 4 2 8{"}"}
          </h3>
          <h4>First Pass:</h4>
          <code>
            <li>
              ( <b>5 1</b> 4 2 8 ) –{">"} ( <b>1 5</b> 4 2 8 ), Here, algorithm
              compares the first two elements, and swaps since 5 {">"} 1.
            </li>
            <li>
              ( 1 <b>5 4</b> 2 8 ) –{">"} ( 1 <b>4 5</b> 2 8 ), Swap since 5{" "}
              {">"} 4
            </li>
            <li>
              ( 1 4 <b>5 2</b> 8 ) –{">"} ( 1 4 <b>2 5</b> 8 ), Swap since 5{" "}
              {">"} 2
            </li>
            <li>
              ( 1 4 2 5 8 ) –{">"} ( 1 4 2 5 8 ), Now, since these elements are
              already in order (8 {">"} 5), algorithm does not swap them.
            </li>
          </code>
          <h4>Second Pass:</h4>
          <code>
            <li>
              ( <b>1 4</b> 2 5 8 ) –{">"} ( <b>1 4</b> 2 5 8 )
            </li>
            <li>
              ( 1 <b>4 2</b> 5 8 ) –{">"} ( 1 <b>2 4</b> 5 8 ), Swap since 4{" "}
              {">"} 2
            </li>
            <li>
              ( 1 2 <b>4 5</b> 8 ) –{">"} ( 1 2 <b>4 5</b> 8 )
            </li>
            <li>
              ( 1 2 4 <b>5 8</b> ) –{">"} ( 1 2 4 <b>5 8</b> )
            </li>
          </code>
          Now, the array is already sorted, but our algorithm does not know if
          it is completed. The algorithm needs one whole pass without any swap
          to know it is sorted.
          <h4>Third Pass:</h4>
          <code>
            <li>
              ( <b>1 2</b> 4 5 8 ) –{">"} ( <b>1 2</b> 4 5 8 )
            </li>
            <li>
              ( 1 <b>2 4</b> 5 8 ) –{">"} ( 1 <b>2 4</b> 5 8 )
            </li>
            <li>
              ( 1 2 <b>4 5</b> 8 ) –{">"} ( 1 2 <b>4 5</b> 8 )
            </li>
            <li>
              ( 1 2 4 <b>5 8</b> ) –{">"} ( 1 2 4 <b>5 8</b> )
            </li>
          </code>
        </div>
        <div className="ItemDemo">
          <h3>Try a Bubble Sort</h3>
          <form action="" autoComplete="off">
            <div className="StackView">
              <div className="StructureView">
                <input
                  type="number"
                  className="StackInput"
                  name="stackvalue"
                  value={newValue}
                  onChange={handleChange()}
                  placeholder="Enter Number here"
                />
                <div className="InputView">
                  [
                  {itemList.length !== 0 &&
                    itemList.map((stack, index) => (
                      <div className="InputItem" key={index}>
                        {stack}
                      </div>
                    ))}
                  ]
                </div>
              </div>
              <div className="StructureControls">
                <button
                  type="submit"
                  className="ControlButton AddBtn"
                  onClick={(e) => handleSubmit(e)}
                >
                  ADD
                </button>

                <button
                  className="ControlButton"
                  onClick={(e) => sortItemList(e)}
                >
                  Sort
                </button>
                <button
                  className="ControlButton"
                  onClick={(e) => clearItemList(e)}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
          <div className="">
            {sorted.length !== 0 && (
              <div className="InputView ReturnView">
                [
                {sorted.length !== 0 &&
                  sorted.map((item, index) => (
                    <div className="InputItem" key={index}>
                      {item}
                    </div>
                  ))}
                ]
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
