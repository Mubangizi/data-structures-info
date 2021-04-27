import React, { useState } from "react";
import FibonnacciSpiral from "../../assets/FibonacciSpiral.svg.png";

const Fibonnacci = () => {
  const [newValue, setNewValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleChange = () => (event) => {
    setNewValue(event.target.value);
  };

  const getFibonnacciSeq = (number) => {
    let n1 = 0,
      n2 = 1,
      nextTerm;
    const sequence = [];

    for (let i = 1; i <= number; i++) {
      sequence.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    return sequence;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newValue !== "") {
      setItemList(getFibonnacciSeq(newValue));
    }
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Fibonnacci Sequence</h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          A fibonacci sequence is written as:
          <code className="CodeIllustration">
            0, 1, 1, 2, 3, 5, 8, 13, 21, ...
          </code>
          The Fibonacci sequence is the integer sequence where the first two
          terms are 0 and 1. After that, the next term is defined as the sum of
          the previous two terms.
          <br />
          <br />
          In mathematics, the Fibonacci numbers, commonly denoted Fn, form a
          sequence, called the Fibonacci sequence, such that each number is the
          sum of the two preceding ones, starting from 0 and 1. That is;
          <code className="CodeIllustration">F0 = 0, F1 = 1,</code>
          and
          <code className="CodeIllustration">Fn = Fn-1 +Fn-2</code>
          for n {">"} 1.
          <h4>Illustration</h4>
          <img src={FibonnacciSpiral} alt="" />
        </div>
        <div className="ItemDemo">
          <h3>Try a Fibonacci Sequence</h3>
          <form action="" autoComplete="off">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fibonnacci;
