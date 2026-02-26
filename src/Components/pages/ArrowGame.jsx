import { useState } from "react";

export default function ArrowGame() {
  const [flip, setFlip] = useState(false);
  const [flow, setFlow] = useState("vertical"); // vertical <-> horizontal

  return (
    <div style={{ padding: 40 }}>
      {/* L Shape */}
      <div
        style={{
          position: "relative",
          width: 30,
          height: 30,
          transform: flip ? "scaleX(-1)" : "scaleX(1)",
          transition: "0.3s"
        }}
      >
        {/* Vertical bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 10,
            height: 30,
            background: "black"
          }}
        />

        {/* Horizontal bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 30,
            height: 10,
            background: "black"
          }}
        />

        {/* ARROWS FLOW */}
        {flow === "vertical" ? (
          <>
            {/* One arrow on vertical arm */}
            <div style={{ position: "absolute", top: 6, left: 12 }}>
              <Arrow rotate={90} />
            </div>

            {/* Two arrows on horizontal arm */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                display: "flex",
                gap: 4
              }}
            >
              <Arrow rotate={0} />
              <Arrow rotate={0} />
            </div>
          </>
        ) : (
          <>
            {/* One arrow on horizontal arm */}
            <div style={{ position: "absolute", bottom: 12, left: 18 }}>
              <Arrow rotate={0} />
            </div>

            {/* Two arrows on vertical arm */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                display: "flex",
                flexDirection: "column",
                gap: 4
              }}
            >
              <Arrow rotate={90} />
              <Arrow rotate={90} />
            </div>
          </>
        )}
      </div>

      {/* Controls */}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setFlip(!flip)}>Flip L</button>
        <button
          style={{ marginLeft: 10 }}
          onClick={() =>
            setFlow((f) => (f === "vertical" ? "horizontal" : "vertical"))
          }
        >
          Rotate Arrows
        </button>
      </div>
    </div>
  );
}

/* Arrow */
function Arrow({ rotate }) {
  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: "0.3s",
        width: 0,
        height: 0,
        borderTop: "4px solid transparent",
        borderBottom: "4px solid transparent",
        borderLeft: "6px solid red"
      }}
    />
  );
}
