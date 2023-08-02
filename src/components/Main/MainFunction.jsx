import "./styles/mainFunction.scss";

function MainFunction(props) {
  return (
    <div className="mainfunction">
      <main className="mainfunction__content">
        <header className="mainfunction__content__header">
          {/* <span className="mainfunction__content__header__part mainfunction__content__header__part--number">2</span> */}
          <span className="mainfunction__content__header__part mainfunction__content__header__part--one">function</span>{" "}
          <span className="mainfunction__content__header__part mainfunction__content__header__part--two">SebastianKubanski()</span>{" "}
          <span className="mainfunction__content__header__part mainfunction__content__header__part--symbol">&#123;</span>
        </header>
      </main>
    </div>
  );
}

export default MainFunction;
