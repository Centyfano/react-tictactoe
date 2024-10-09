import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [shape, setShape] = useState<"x" | "y">("x");
  const [arr] = useState(Array(9).fill(null));
  const [won, hasWon] = useState(false);

  const setVal = (id: number) => {
    arr[id] = shape;
    checkWin();
  };
  

  const checkWin = () => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const win = combinations.some(com => {
      const w = com.every(n => arr[n] === 'x') || com.every(n => arr[n] === 'y');
      return w;
    });

    if(!win) toggle();
    hasWon(win);
  };

  const reset = () => {
    arr.fill(null);
    hasWon(false);

  }

  const toggle = () => {
    if (shape == "x") setShape("y");
    else setShape("x");
  };

  return (
    <>
    <div> {won && <h1>{shape} has won</h1>}</div>
      <div className="container">
        <div className="row">
          <Box sendId={setVal} id={0} shape={arr[0]} />
          <Box sendId={setVal} id={1} shape={arr[1]} />
          <Box sendId={setVal} id={2} shape={arr[2]} />
        </div>
        <div className="row">
          <Box sendId={setVal} id={3} shape={arr[3]} />
          <Box sendId={setVal} id={4} shape={arr[4]} />
          <Box sendId={setVal} id={5} shape={arr[5]} />
        </div>
        <div className="row">
          <Box sendId={setVal} id={6} shape={arr[6]} />
          <Box sendId={setVal} id={7} shape={arr[7]} />
          <Box sendId={setVal} id={8} shape={arr[8]} />
        </div>
      </div>

     {won && <button style={{marginTop: '10px'}} onClick={reset}>Reset</button>}

    </>
  );
}

export default App;
