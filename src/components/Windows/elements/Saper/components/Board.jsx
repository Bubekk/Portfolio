import { useEffect } from "react";
import Game from "../utils/Game";
import "./Board.scss";

function Board(props) {
  return <div className="board">{Game(3, 3, 3)}</div>;
}

export default Board;
