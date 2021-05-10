import React from "react";
import BinarySearchImage from "../../assets/binarySearch.png";

const BinarySearch = () => {
  return (
    <div className="ArrayComponent">
      <h1 className="ItemHeading">Binary Search</h1>
      <div className="ItemDescription">
        Search a sorted array by repeatedly dividing the search interval in
        half. Begin with an interval covering the whole array. If the value of
        the search key is less than the item in the middle of the interval,
        narrow the interval to the lower half. Otherwise, narrow it to the upper
        half. Repeatedly check until the value is found or the interval is
        empty.
        <h3>Steps:</h3>
        <ol>
          <li>Compare x with the middle element.</li>
          <li>
            If x matches with the middle element, we return the mid index.
          </li>
          <li>
            Else If x is greater than the mid element, then x can only lie in
            the right half subarray after the mid element. So we recur for the
            right half.
          </li>
          <li>Else (x is smaller) recur for the left half.</li>
        </ol>
        <h3>Example:</h3>
        <img src={BinarySearchImage} alt="" />
        The idea of binary search is to use the information that the array is
        sorted and reduce the time complexity to <code>O(Log n)</code>.
      </div>
    </div>
  );
};
export default BinarySearch;
