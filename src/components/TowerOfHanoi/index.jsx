import React from "react";
import TowerOfHanoiImage from "../../assets/towerofHanoi.jpg";
import TowerGif from "../../assets/tohIllustration.gif";

const TowerOfHanoi = () => {
  return (
    <div className="Stack">
      <h1 className="ItemHeading">Tower Of Hanoi </h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          The <b>Tower of Hanoi</b> (also called the <b>Tower of Brahma</b> or{" "}
          <b>Lucas' Tower</b>
          and sometimes pluralized as <b>Towers</b>, or simply{" "}
          <b>pyramid puzzle</b>) is a mathematical game or puzzle. It consists
          of three rods and a number of disks of different diameters, which can
          slide onto any rod. The puzzle starts with the disks stacked on one
          rod in order of decreasing size, the smallest at the top, thus
          approximating a <b>conical</b> shape.
          <br />
          <br />
          The objective of the puzzle is to move the entire stack to the last
          rod, obeying the following simple rules:
          <code className="CodeIllustration">
            <ol>
              <li>Only one disk may be moved at a time.</li>
              <li>
                Each move consists of taking the upper disk from one of the
                stacks and placing it on top of another stack or an empty rod.
              </li>
              <li>
                No disk may be placed on top of a disk that is smaller than it.
              </li>
            </ol>
          </code>
          With 3 disks, the puzzle can be solved in 7 moves. The minimal number
          of moves required to solve a Tower of Hanoi puzzle is{" "}
          <code>2n − 1</code>, where n is the number of disks.
          <br />
          <br />
          <h4>Illustrations</h4>
          <img src={TowerGif} alt="" />
          <img src={TowerOfHanoiImage} alt="" />
        </div>
        <div className="ItemDemo">
          <h3>Try a Tower of Hanoi</h3>
          {/* <form action="" autoComplete="off">
            <div className="StackView">
              <div className="StructureView">
                <input
                  type="number"
                  className="StackInput"
                  name="stackvalue"
                  value={newValue}
                  onChange={handleChange()}
                  placeholder="Enter Number of terms"
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
                  RUN
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default TowerOfHanoi;
