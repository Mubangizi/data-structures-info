import React from "react";
import "./ArrayComponent.css";
const ArrayComponent = () => {
  return (
    <div className="ArrayComponent">
      <h1 className="ItemHeading">Array</h1>
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
        <h3>Basic Operations</h3>
        Following are the basic operations supported by an array.
        <ul>
          <li>Traverse − print all the array elements one by one.</li>
          <li>Insertion − Adds an element at the given index.</li>
          <li>Deletion − Deletes an element at the given index.</li>
          <li>
            Search − Searches an element using the given index or by the value.
          </li>
          <li>Update − Updates an element at the given index.</li>
        </ul>
      </div>
    </div>
  );
};

export default ArrayComponent;
