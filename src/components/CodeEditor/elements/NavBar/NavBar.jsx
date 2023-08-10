import "./navbar.scss";

function NavBar(props) {
  const handleBtn = () => {
    props.handleCodeEditorLink();
  };
  return (
    <nav className="navbar">
      <p className="navbar__filename">App.jsx - Portfolio Sebastian Kubanski - Bubekk Studio Code</p>
      <button className="navbar__btn" onClick={handleBtn}>
        &#935;
      </button>
    </nav>
  );
}

export default NavBar;
