import { useState } from 'react';

// this function is created to centralize the contolling of each tile in the square
function Tile() {  // indicates that the Tile component can be passed a prop
  const [value, setValue] = useState(null); // "value" stores the value and "setValue" is a function that can be used to change the value. useState(null) makes it so the value starts at null
  
  function handleClick() { 
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}

const Square = () => {
  return (
    <>
      <div className="tile-row"> {/* groups each component into rows*/}
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="tile-row"> 
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="tile-row"> 
        <Tile />
        <Tile />
        <Tile />
      </div>
    </>
  );
}
export default Square
