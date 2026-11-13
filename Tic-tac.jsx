
import React, { useState } from "react";
import "./App.css";

function App() {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check winner
  function checkWinner(newBoard) {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }

    return null;
  }

  // Handle box click
  function handleClick(index) {

    if (board[index] !== "" || winner) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every(cell => cell !== "")) {
      setWinner("Draw");
    } else {
      setIsXTurn(!isXTurn);
    }
  }

  // Restart game
  function restartGame() {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWinner(null);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>

      <h2>
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Player ${isXTurn ? "X" : "O"}'s Turn`}
      </h2>

      <div className="board">
        {board.map((value, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
