import "./calculator.scss";
import CalcButton from "./CalcButton/CalcButton";
import { useState, useEffect } from "react";

function Calculator(props) {
  const [calcInput, setCalcInput] = useState("0");
  const [calcValue, setCalcValue] = useState([]);
  const [result, setResult] = useState(null);

  const handleCalcInput = (e) => {
    if (calcInput === "0") {
      setCalcInput(e.target.value);
    } else {
      setCalcInput(calcInput + e.target.value);
    }
  };

  const handleCalcOperation = (e) => {
    calcValue.push(calcInput, e.target.value);
    setCalcInput("0");
  };

  const handleReset = () => {
    setCalcValue([]);
    setCalcInput("0");
  };

  const handleEqual = () => {
    calcValue.push(calcInput);
    const num1 = parseFloat(calcValue[0]);
    const operator = calcValue[1];
    const num2 = parseFloat(calcValue[2]);

    if (operator === "+") {
      setResult(num1 + num2);
    } else if (operator === "-") {
      setResult(num1 - num2);
    } else if (operator === "*") {
      setResult(num1 * num2);
    } else if (operator === "/") {
      setResult(num1 / num2);
    } else if (operator === "%") {
      setResult((num1 / 100) * num2 + "%");
    }
    setCalcInput(result);
  };

  useEffect(() => {
    if (result !== null) {
      setCalcInput(result);
      setCalcValue([]);
    }
  }, [result]);

  const handleCalcClose = () => {
    props.handleCalculator("Calculator");
    setCalcInput("0");
    setCalcValue([]);
  };

  return (
    <div
      className="calculator"
      style={props.style}
      onClick={() => {
        props.handleActiveWindow(props.type);
      }}
    >
      <nav className="calculator__nav">
        <p className="calculator__nav__filename">Calculator</p>
        <button className="calculator__nav__btn calculator__nav__btn--close" onClick={handleCalcClose}>
          &#935;
        </button>
      </nav>
      <div className="calculator__calc-field">
        <div className="calculator__calc-field__screen">
          <p className="calculator__calc-field__screen__values"> {calcInput} </p>
        </div>
        <div className="calculator__calc-field__btns">
          <div className="calculator__calc-field__btns--nums">
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="1" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="2" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="3" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="4" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="5" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="6" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="7" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="8" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="9" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums calc-btn calc-btn--nums--dummy" value="x" />
            <CalcButton className="calc-btn calc-btn--nums" type="num" value="0" function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--nums calc-btn calc-btn--nums--dummy" value="x" />
          </div>
          <div className="calculator__calc-field__btns--operational">
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="." function={handleCalcInput} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="+" function={handleCalcOperation} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="-" function={handleCalcOperation} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="/" function={handleCalcOperation} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="*" function={handleCalcOperation} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="%" function={handleCalcOperation} />
            <CalcButton className="calc-btn calc-btn--operational" type="operation" value="C" function={handleReset} />
            <CalcButton className="calc-btn calc-btn--operational" type="equal" value="=" function={handleEqual} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
