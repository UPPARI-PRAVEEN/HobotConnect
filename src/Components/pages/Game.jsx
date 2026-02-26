import { useEffect, useState } from "react";

const TOTAL_ROUNDS = 25;
const TIME_PER_QUESTION = 6;

/* ---------- Difficulty-based expression ---------- */
const generateExpression = (round) => {
  let operators = ["+", "-"];
  let maxA = 30;
  let maxB = 15;

  if (round > 5) operators.push("*");
  if (round > 10) operators.push("/");
  if (round > 12) operators.push("%");

  if (round > 8) {
    maxA = 100;
    maxB = 50;
  }

  if (round > 15) {
    maxA = 200;
    maxB = 100;
  }

  // Hard mode (decimals) - introduced much earlier
  if (round > 5) {
    const a = +(Math.random() * 50).toFixed(1);
    const b = Math.floor(Math.random() * 20) + 1;
    const op = operators[Math.floor(Math.random() * operators.length)];
    return `${a} ${op} ${b}`;
  }

  const a = Math.floor(Math.random() * maxA) + 1;
  const b = Math.floor(Math.random() * maxB) + 1;
  const op = operators[Math.floor(Math.random() * operators.length)];
  return `${a} ${op} ${b}`;
};

const evaluate = (exp) => Function(`return ${exp}`)();

/* ---------- Circular Timer ---------- */
const CircularTimer = ({ time, total }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (time / total) * circumference;

  return (
    <svg width="120" height="120" style={{ marginTop: 20 }}>
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#eee"
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#111"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s linear" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="20"
        fontWeight="bold"
      >
        {time}
      </text>
    </svg>
  );
};

export default function App() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [expressions, setExpressions] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [time, setTime] = useState(TIME_PER_QUESTION);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startRound();
  }, []);

  useEffect(() => {
    if (gameOver) return;

    if (time === 0) {
      nextRound(false);
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, gameOver]);

  const startRound = () => {
    const exps = Array.from({ length: 5 }).map(() => {
      const exp = generateExpression(round);
      return { exp, value: evaluate(exp) };
    });
    setExpressions(exps);
    setClicked([]);
    setTime(TIME_PER_QUESTION);
  };

  const nextRound = (correct) => {
    if (correct) setScore((s) => s + 1);

    if (round === TOTAL_ROUNDS) {
      setGameOver(true);
    } else {
      setRound((r) => r + 1);
      startRound();
    }
  };

  const handleClick = (item) => {
    const updated = [...clicked, item];
    setClicked(updated);

    if (updated.length === 5) {
      const values = updated.map((i) => i.value);
      const sorted = [...values].sort((a, b) => a - b);
      nextRound(JSON.stringify(values) === JSON.stringify(sorted));
    }
  };

  if (gameOver) {
    return (
      <div style={styles.container}>
        <h1>🎉 Game Over</h1>
        <h2>Your Score</h2>
        <h1>{score} / {TOTAL_ROUNDS}</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3>Question {round} / {TOTAL_ROUNDS}</h3>
      <p>Select from <b>LOWEST</b> to <b>HIGHEST</b> (in order!)</p>

      <div style={styles.bubbles}>
        {expressions.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item)}
            disabled={clicked.includes(item)}
            style={{
              ...styles.bubble,
              opacity: clicked.includes(item) ? 0.4 : 1
            }}
          >
            {item.exp}
          </button>
        ))}
      </div>

      <CircularTimer time={time} total={TIME_PER_QUESTION} />
      <p>Score: {score}</p>
    </div>
  );
}

/* ---------- Inline Styles ---------- */
const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: 30,
    background: "#f8f8f8",
    minHeight: "100vh"
  },
  bubbles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginTop: 40
  },
  bubble: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "none",
    fontSize: 16,
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    cursor: "pointer"
  }
};
