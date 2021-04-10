import React from "react";
import "./ArrayComponent.css";
const ArrayComponent = () => {
  return (
    <div className="ArrayComponent">
      <h2 className="ItemHeading">Array</h2>
      <div className="ItemDescription">
        Array is a container which can hold a fix number of items and these
        items should be of the same type. Most of the data structures make use
        of arrays to implement their algorithms. Following are the important
        terms to understand the concept of Array.
        <ul>
          <li>Element − Each item stored in an array is called an element.</li>
          <li>
            Index − Each location of an element in an array has a numerical
            index, which is used to identify the element.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArrayComponent;
