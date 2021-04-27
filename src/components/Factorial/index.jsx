import React, { useState } from "react";
import FactorialFormula from '../../assets/factorial-formula.png'
const Factorial = () => {
  const [newValue, setNewValue] = useState("");
  const [answer, setAnswer] = useState([]);

  const handleChange = () => (event) => {
    setNewValue(event.target.value);
  };

  const getFactorial = (number) => {
    return number < 2 ? 1 : getFactorial(number - 1) * number;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newValue !== "") {
      setAnswer(getFactorial(newValue));
    }
  };

  return (
    <div className="Stack">
      <h1 className="ItemHeading">Factorial </h1>
      <div className="SideLine">
        <div className="ItemDescription ">
          In mathematics, the factorial of a non-negative integer n, denoted by
          n!, is the product of all positive integers less than or equal to n:
          <code className="CodeIllustration">n! = n.(n-1).(n-2)....3.2.1</code>
          For Example
          <code className="CodeIllustration">5! = 5.4.3.2.1 = 120</code>
          <br />
          <img src={FactorialFormula} alt=""/>
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
                  placeholder="Enter Number"
                />
                <div className="InputView">
                  <div className="InputItem">{answer}</div>
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

export default Factorial;
