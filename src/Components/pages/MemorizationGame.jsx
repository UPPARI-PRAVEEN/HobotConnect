import React, { useEffect, useState } from "react";
import "./memoriation.css";

const MemorizationGame = () => {
  const [pair, setPair] = useState({
    randomNum: [],
    isMatched: false,
    pairsCount: 0,
    matchedPairs: [],
  });

  const [matchedPairs, setMatchedPairs] = useState([]); // currently selected 2 cards
  const [grid, setGrid] = useState([]);

  // Generate and shuffle numbers (1–18 twice)
  const generateNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= 18; i++) numbers.push(i, i);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  };

  // Create 6x6 grid
  const createGrid = (numbers) => {
    const newGrid = [];
    for (let i = 0; i < 36; i += 6) {
      newGrid.push(numbers.slice(i, i + 6));
    }
    setGrid(newGrid);
  };

  // Initialize game
  useEffect(() => {
    const numbers = generateNumbers();
    setPair((prev) => ({ ...prev, randomNum: numbers }));
    createGrid(numbers);
  }, []);

  // Handle click on card
  const handleClick = (rowIndex, colIndex, num) => {
    if (matchedPairs.length < 2) {
      setMatchedPairs((prev) => [...prev, { num, index: [rowIndex, colIndex] }]);
    }
  };

  // Matching logic
  useEffect(() => {
    if (matchedPairs.length === 2) {
      if (matchedPairs[0].num === matchedPairs[1].num) {
        console.log("✅ Match Found!");
        setPair((prev) => ({
          ...prev,
          pairsCount: prev.pairsCount + 1,
          matchedPairs: [
            ...prev.matchedPairs,
            matchedPairs[0],
            matchedPairs[1],
          ],
        }));
      } else {
        console.log("❌ Not a match");
      }
      setTimeout(() => setMatchedPairs([]), 600); // reset selected cards
    }
  }, [matchedPairs]);

  // Card style logic
  const handleStyle = (num, rowIndex, colIndex) => {
    const isMatched = pair.matchedPairs.some(
      (mp) => mp.index[0] === rowIndex && mp.index[1] === colIndex
    );

    const isFlipped = matchedPairs.some(
      (mp) => mp.index[0] === rowIndex && mp.index[1] === colIndex
    );

    if (isMatched) {
      return { backgroundColor: "red", color: "green" }; // matched
    } else if (isFlipped) {
      return { backgroundColor: "yellow", color: "green" }; // flipped
    } else {
      return { backgroundColor: "lightgray", color: "lightgray" }; // hidden
    }
  };

  // Reset / Restart Game
  const reSet = () => {
    const numbers = generateNumbers();
    setPair({
      randomNum: numbers,
      isMatched: false,
      pairsCount: 0,
      matchedPairs: [],
    });
    setMatchedPairs([]);
    createGrid(numbers);
  };

  return (
    <div className="game-board">
      {grid.map((row, rowIndex) => (
        <div className="rowed" key={rowIndex}>
          {row.map((num, colIndex) => (
            <div
              key={colIndex}
              className="carded"
              style={handleStyle(num, rowIndex, colIndex)}
              onClick={() => handleClick(rowIndex, colIndex, num)}
            >
              {num}
            </div>
          ))}
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={reSet}>Restart Game</button>
      </div>
    </div>
  );
};

export default MemorizationGame;
