import "./stickyNote.scss";

function StickyNote(props) {
  return (
    <div className={`sticky-note sticky-note--${props.color}`}>
      <p className="sticky-note__text">{props.text}</p>
    </div>
  );
}

export default StickyNote;
