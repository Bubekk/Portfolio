import "./navbar.scss";

function NavBar(props) {
  const handleBtn = (e) => {
    props.handleCodeEditorLink(e);
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
