import React, { useState } from "react";
import "./InsertionSort.css";
import GifIllustration from "../../assets/Insertion_sort.gif";
import ImageIllustration from "../../assets/insertionsort-image.png";

const InsertionSort = () => {
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
  const insertionSort = (array) => {
    let n = array.length;
    for (let i = 1; i < n; ++i) {
      let key = array[i];
      let j = i - 1;

      /* Move elements of arr[0..i-1], that are
      greater than key, to one position ahead
      of their current position */
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    return array;
  };

  const sortItemList = (e) => {
    e.preventDefault();
    let newArray = [...itemList];
    setSorted(insertionSort(newArray));
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Insertion Sort</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          Insertion sort is a simple sorting algorithm that works similar to the
          way you sort playing cards in your hands. The array is virtually split
          into a sorted and an unsorted part. Values from the unsorted part are
          picked and placed at the correct position in the sorted part.
          <br />
          <h4>Algorithm</h4>
          Now we have a bigger picture of how this sorting technique works, so
          we can derive simple steps by which we can achieve insertion sort:
          <ol>
            <li>If it is the first element, it is already sorted. return 1;</li>
            <li>Pick next element</li>
            <li>Compare with all elements in the sorted sub-list</li>
            <li>
              Shift all the elements in the sorted sub-list that is greater than
              the value to be sorted
            </li>
            <li>Insert the value</li>
            <li>Repeat until list is sorted</li>
          </ol>
          <h4>Pseudo Code for InsertionSort </h4>
          <code className="CodeIllustration">
            <br />
            procedure insertionSort( A : array of items )<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int holePosition
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;int valueToInsert
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;for i = 1 to length(A) inclusive do:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* select value to
            be inserted */
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; valueToInsert =
            A[i]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; holePosition = i
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /*locate hole
            position for the element to be inserted */
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; while holePosition
            {">"} 0 and A[holePosition-1] {">"} valueToInsert do:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A[holePosition] = A[holePosition-1]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            holePosition = holePosition -1
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end while
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /* insert the
            number at hole position */
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A[holePosition] =
            valueToInsert
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;end for
            <br />
            end procedure
          </code>
          <h3>Illustration:</h3>
          <img src={GifIllustration} alt="" />
          <h3>
            Example: {"{"}4 3 2 10 12 1 5 6{"}"}
          </h3>
          <img src={ImageIllustration} alt="" />
        </div>
        <div className="ItemDemo">
          <h3>Try a Insertion Sort</h3>
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

export default InsertionSort;
