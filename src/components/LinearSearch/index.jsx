import React from "react";
import LinearSearchImage from "../../assets/linearSearch.png";

const LinearSearch = () => {
  return (
    <div className="ArrayComponent">
      <h1 className="ItemHeading">Linear Search</h1>
      <div className="ItemDescription">
        Search a sorted array by repeatedly dividing the search interval in
        half. Begin with an interval covering the whole array. If the value of
        the search key is less than the item in the middle of the interval,
        narrow the interval to the lower half. Otherwise, narrow it to the upper
        half. Repeatedly check until the value is found or the interval is
        empty.
        <h3>A simple approach is to do a linear search, i.e </h3>
        <ol>
          <li>
            Start from the leftmost element of arr[] and one by one compare x
            with each element of arr[]
          </li>
          <li>If x matches with an element, return the index.</li>
          <li>If x doesn’t match with any of elements, return -1.</li>
        </ol>
        <h3>Example:</h3>
        <img src={LinearSearchImage} alt="" />
        <h3>Sample code</h3>
        <code className="CodeIllustration">
          // Searches an unordered array of integers <br />
          int search(
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;int data[], &nbsp;&nbsp;&nbsp;&nbsp;//input:
          array
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;int size,
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//input: array size
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;int value){"{"}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;//input: search value
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;// output: if found, return index;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;//
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;otherwise, return –1.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;for(int index = 0; index {"<"} size; index++)
          {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(data[index] ==
          value)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return index;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return -1;
          <br />
          {"}"}
        </code>
      </div>
    </div>
  );
};
export default LinearSearch;
