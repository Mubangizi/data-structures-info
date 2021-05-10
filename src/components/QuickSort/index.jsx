import React, { useState } from "react";
import "./QuickSort.css";
import GifIllustration from "../../assets/quicksort.gif";
import ImageIllustration from "../../assets/quicksort-image.png";

const QuickSort = () => {
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

  const swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  };

  const partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //swap two elements
        i++;
        j--;
      }
    }
    return i;
  };
  const quickSort = (items, left, right) => {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  };

  const sortItemList = (e) => {
    e.preventDefault();
    let newArray = [...itemList];
    setSorted(quickSort(newArray, 0, newArray.length - 1));
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Quick Sort</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          Like <b>Merge Sort</b>, Quick Sort is a{" "}
          <b>
            <u>Divide and Conquer algorithm</u>
          </b>
          . It picks an element as pivot and partitions the given array around
          the picked pivot. There are many different versions of quickSort that
          pick pivot in different ways.
          <ol>
            <li>Always pick first element as pivot.</li>
            <li>Always pick last element as pivot (implemented below)</li>
            <li>Pick a random element as pivot.</li>
            <li>Pick median as pivot (shown in illustrations below).</li>
          </ol>
          <br />
          The key process in quickSort is <code>partition()</code>. Target of
          partitions is, given an array and an element <code>x</code> of array
          as pivot, put <code>x</code> at its correct position in sorted array
          and put all smaller elements (smaller than <code>x</code>) before{" "}
          <code>x</code>, and put all greater elements (greater than{" "}
          <code>x</code>) after <code>x</code>. All this should be done in
          linear time.
          <h4>Pseudo Code for QuickSort </h4>
          <code className="CodeIllustration">
            quickSort(arr, beg, end)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; if (beg {"<"} end)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pivotIndex =
            partition(arr,beg, end)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; quickSort(arr, beg,
            pivotIndex)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; quickSort(arr,
            pivotIndex + 1, end)
            <br />
            <br />
            partition(arr, beg, end)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; set end as pivotIndex
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; pIndex = beg - 1<br />
            &nbsp;&nbsp;&nbsp;&nbsp; for i = beg to end-1
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if arr[i] {
              "<"
            }{" "}
            pivot
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            swap arr[i] and arr[pIndex]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            pIndex++
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; else swap pivot and
            arr[pIndex+1]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; return pIndex + 1<br />
          </code>
          <h3>Illustration:</h3>
          <img src={GifIllustration} alt="" />
          <h3>
            Illustration: {"{"}5 3 7 6 2 9{"}"}
          </h3>
          <img src={ImageIllustration} alt="" />
        </div>
        <div className="ItemDemo">
          <h3>Try a Quick Sort</h3>
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

export default QuickSort;
