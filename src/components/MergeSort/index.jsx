import React, { useState } from "react";
import "./MergeSort.css";
import GifIllustration from "../../assets/Merge-sort.gif";
import ImageIllustration from "../../assets/merge-sort-image.png";

const MergeSort = () => {
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

  const merge = (left, right) => {
    let arr = [];
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    // Concatenating the leftover elements
    return [...arr, ...left, ...right];
  };

  function mergeSort(array) {
    const half = array.length / 2;
    // Base case or terminating case
    if (array.length < 2) {
      return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
  }

  const sortItemList = (e) => {
    e.preventDefault();
    let newArray = [...itemList];
    setSorted(mergeSort(newArray));
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Merge Sort</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          Like <b>QuickSort</b>, Merge Sort is a{" "}
          <b>
            <u>Divide and Conquer algorithm</u>
          </b>
          . It divides the input array into two halves, calls itself for the two
          halves, and then merges the two sorted halves. <br />
          The <code>merge()</code> function is used for merging two halves.{" "}
          <br />
          The <code>merge(arr, l, m, r)</code> is a key process that assumes
          that <code>arr[l..m]</code> and <code>arr[m+1..r]</code> are sorted
          and merges the two sorted sub-arrays into one. See the following C
          implementation for details.
          <code className="CodeIllustration">
            MergeSort(arr[], l, r)
            <br />
            If r {">"} l<br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. Find the middle point to divide the array
            into two halves:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            middle m = l + (r-l)/2
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2. Call mergeSort for first half:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Call mergeSort(arr, l, m)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;3. Call mergeSort for second half:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Call mergeSort(arr, m+1, r)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;4. Merge the two halves sorted in step 2 and
            3:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Call merge(arr, l, m, r)
            <br />
          </code>
          <h3>
            Illustration: {"{"}6 5 3 1 8 7 2 4{"}"}
          </h3>
          <img src={GifIllustration} alt="" />
          <h3>
            Illustration: {"{"}4 8 7 2 11 1 3{"}"}
          </h3>
          <img src={ImageIllustration} alt="" />
        </div>
        <div className="ItemDemo">
          <h3>Try a Merge Sort</h3>
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

export default MergeSort;
