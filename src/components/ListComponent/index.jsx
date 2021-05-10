import React from "react";
import "./ListComponent.css";
import ListImage from "../../assets/linked_list.jpg";

const ListComponent = () => {
  return (
    <div className="ArrayComponent">
      <h1 className="ItemHeading">Linked Lists</h1>
      <div className="ItemDescription">
        A linked list is a sequence of data structures, which are connected
        together via links. Linked List is a sequence of links which contains
        items. Each link contains a connection to another link. Linked list is
        the second most-used data structure after array. Following are the
        important terms to understand the concept of Linked List.
        <ul>
          <li>
            Link − Each link of a linked list can store a data called an
            element.
          </li>
          <li>
            Next − Each link of a linked list contains a link to the next link
            called Next.
          </li>
          <li>
            LinkedList − A Linked List contains the connection link to the first
            link called First.
          </li>
        </ul>
        <div className="SplitItems">
          <div>
            <h3>Linked List Representation</h3>
            Linked list can be visualized as a chain of nodes, where every node
            points to the next node. As per the illustration shown, following
            are the important points to be considered.
            <ul>
              <li>Linked List contains a link element called first.</li>
              <li>
                Each link carries a data field(s) and a link field called next.
              </li>
              <li>
                Each link is linked with its next link using its next link.
              </li>
              <li>
                Last link carries a link as null to mark the end of the list.
              </li>
            </ul>
          </div>
          <img src={ListImage} alt="" />
        </div>
        <h3>Types of Linked List</h3>
        Following are the various types of linked list.
        <ul>
          <li>Simple Linked List − Item navigation is forward only.</li>
          <li>
            Doubly Linked List − Items can be navigated forward and backward.
          </li>
          <li>
            Circular Linked List − Last item contains link of the first element
            as next and the first element has a link to the last element as
            previous.
          </li>
        </ul>
        <h3>Basic Operations</h3>
        Following are the basic operations supported by a list.
        <ul>
          <li>Insertion − Adds an element at the beginning of the list.</li>
          <li>Deletion − Deletes an element at the beginning of the list.</li>
          <li>Display − Displays the complete list.</li>
          <li>Search − Searches an element using the given key.</li>
          <li>Delete − Deletes an element using the given key.</li>
        </ul>
      </div>
    </div>
  );
};
export default ListComponent;
