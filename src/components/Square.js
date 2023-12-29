import { useState } from 'react';

// this function is created to centralize the contolling of each tile in the square
function Tile({ value, onSquareClick }) {  // indicates that the Tile component can be passed a prop
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

const Square = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)) // each entry in the array corresponds to the value of a square
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) { // prevents another mark on a tile thats already marked
      return;
    }
    const nextSquares = squares.slice(); //the .slice is used to create a new array instead of overwriting the base array to maintain reusablility
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
   status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="tile-row"> {/* groups each component into rows*/}
        <Tile value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Tile value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Tile value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="tile-row"> 
        <Tile value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Tile value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Tile value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="tile-row"> 
        <Tile value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Tile value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Tile value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares [a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
export default Square
