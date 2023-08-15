import "./calculator.scss";
import CalcButton from "./CalcButton/CalcButton";

function Calculator(props) {
  const handleCalcClose = () => {
    props.handleCalculator();
  };

  return (
    <div className="calculator" style={props.style}>
      <nav className="calculator__nav">
        <p className="calculator__nav__filename">Calculator</p>
        <button className="calculator__nav__btn calculator__nav__btn--close" onClick={handleCalcClose}>
          &#935;
        </button>
      </nav>
      <div className="calculator__calc-field">
        <div className="calculator__calc-field__screen"></div>
        <div className="calculator__calc-field__btns">
          <div className="calculator__calc-field__btns--nums">
            <CalcButton className="calc-btn calc-btn--nums" value="1" />
            <CalcButton className="calc-btn calc-btn--nums" value="2" />
            <CalcButton className="calc-btn calc-btn--nums" value="3" />
            <CalcButton className="calc-btn calc-btn--nums" value="4" />
            <CalcButton className="calc-btn calc-btn--nums" value="5" />
            <CalcButton className="calc-btn calc-btn--nums" value="6" />
            <CalcButton className="calc-btn calc-btn--nums" value="7" />
            <CalcButton className="calc-btn calc-btn--nums" value="8" />
            <CalcButton className="calc-btn calc-btn--nums" value="9" />
            <CalcButton className="calc-btn calc-btn--nums calc-btn calc-btn--nums--dummy" value="x" />
            <CalcButton className="calc-btn calc-btn--nums" value="0" />
            <CalcButton className="calc-btn calc-btn--nums calc-btn calc-btn--nums--dummy" value="x" />
          </div>
          <div className="calculator__calc-field__btns--operational">
            <CalcButton className="calc-btn calc-btn--operational" value="," />
            <CalcButton className="calc-btn calc-btn--operational" value="+" />
            <CalcButton className="calc-btn calc-btn--operational" value="-" />
            <CalcButton className="calc-btn calc-btn--operational" value="/" />
            <CalcButton className="calc-btn calc-btn--operational" value="*" />
            <CalcButton className="calc-btn calc-btn--operational" value="=" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
