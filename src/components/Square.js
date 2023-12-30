import { useState } from 'react';

// this function is created to centralize the contolling of each tile in the square
function Tile({ value, onTileClick }) {  // indicates that the props: 'value' and 'onTileClick', can be passed through the functional component called 'Tile'
  return <button className="square" onClick={onTileClick}>{value}</button> // 'onTileClick' is an 'onClick' function that tile component calls on when it is clicked.
}  // renders a button and sets its 'onClick' event o the 'onTileClick' function. The button displays the value prop.

const Square = () => {  // a functional component where all the features of the tiles will be housed (in the square)
  const [xIsNext, setXIsNext] = useState(true); // a boolean (true/false) that indicates if it is X's turn
  const [tiles, setTiles] = useState(Array(9).fill(null)) // an array representing the state of each tile in the square
  function handleClick(i) { // function is called whenever a tile is clicked
    if (tiles[i] || calculateWinner(tiles)) { // prevents another mark on a tile thats already marked || or if there is a winner using the 'calculateWinner' function
      return; 
    }
    const nextTile = tiles.slice(); //the .slice is used to create a new array instead of overwriting the base array to maintain reusablility
    if (xIsNext) {
      nextTile[i] = "X";
    } else {
      nextTile[i] = "O";
    }
    setTiles(nextTile);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(tiles);
  let status;
  if (winner) {
   status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function calculateWinner(tiles) {
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
      if (tiles[a] && tiles [a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="tile-row"> {/* groups each component into rows*/}
        <Tile value={tiles[0]} onTileClick={() => handleClick(0)} />
        <Tile value={tiles[1]} onTileClick={() => handleClick(1)} />
        <Tile value={tiles[2]} onTileClick={() => handleClick(2)} />
      </div>
      <div className="tile-row"> 
        <Tile value={tiles[3]} onTileClick={() => handleClick(3)} />
        <Tile value={tiles[4]} onTileClick={() => handleClick(4)} />
        <Tile value={tiles[5]} onTileClick={() => handleClick(5)} />
      </div>
      <div className="tile-row"> 
        <Tile value={tiles[6]} onTileClick={() => handleClick(6)} />
        <Tile value={tiles[7]} onTileClick={() => handleClick(7)} />
        <Tile value={tiles[8]} onTileClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default Square
