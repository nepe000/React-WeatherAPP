// import { useState } from "react";
// import Fruit from "./fruits/fruit";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     setSquares(nextSquares); //new array that takes squares state

//     setXIsNext(!xIsNext);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <Fruit />
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
//rafce --> react arrow function component
//rfce --> react funciton component

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [state, setState] = useState(true);

//   useEffect(() => {
//     console.log("coUnter mounted");

//     return function () {
//       console.log("Unmount Counter");
//     };
//   }, []); //empty dependency array whole component
//   //if dependency has some value then according to it

//   useEffect(() => {
//     console.log("User Updated count", count);
//     return () => {
//       console.log("count", count);
//     };
//   }, [count]);
//   return (
//     <div>
//       <h1>useEffect on Specific Value Change</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setState(!state)}>toggle</button>
//       {state ? (
//         <>
//           <button onClick={() => setCount(count + 1)}>Increment Count</button>
//           <button
//             onClick={() => {
//               if (count === 0) {
//                 return;
//               }
//               setCount(count - 1);
//             }}
//           >
//             Decrement Count
//           </button>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }
// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import Error from "./pages/error";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <button
//         onClick={() => {
//           if (count === 0) {
//             return;
//           }
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }
