import React from "react";

export default function LoveJoyPeaceCards() {
  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%,100%{transform:scale(1)}
          14%{transform:scale(1.28)}
          28%{transform:scale(1.05)}
          44%{transform:scale(1.16)}
          60%{transform:scale(1)}
        }
        @keyframes floatHeart {
          0%{opacity:0.85;transform:translateY(0) scale(1)}
          100%{opacity:0;transform:translateY(-68px) scale(0.3)}
        }
        @keyframes rotateSun {
          from{transform:rotate(0deg)} to{transform:rotate(360deg)}
        }
        @keyframes bobDot {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)}
        }
        @keyframes breathe {
          0%,100%{transform:scale(1)} 50%{transform:scale(1.13)}
        }
        @keyframes rippleOut {
          0%{r:18;opacity:0.55} 100%{r:46;opacity:0}
        }
        @keyframes doveDrift {
          0%,100%{transform:translate(0px,0px)}
          40%{transform:translate(2px,-9px)}
          70%{transform:translate(-3px,4px)}
        }
        @keyframes shimWordLove {
          0%,100%{opacity:1} 50%{opacity:0.7}
        }
        @keyframes shimWordJoy {
          0%,70%,100%{opacity:1} 35%{opacity:0.65}
        }
      `}</style>

      <h2 style={{ position: "absolute", left: "-9999px" }}>
        Animated illustrations of Love, Joy and Peace
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "1.25rem 0",
          flexWrap: "wrap",
        }}
      >
        {/* LOVE */}
        <div
          style={{
            flex: 1,
            background: "#100808",
            borderRadius: "14px",
            border: "0.5px solid #2e1818",
            borderTop: "2px solid #E24B4A",
            padding: "22px 12px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            minWidth: "280px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#E24B4A",
              animation: "shimWordLove 2.8s ease-in-out infinite",
            }}
          >
            Love
          </span>

          <svg viewBox="0 0 100 105" width="100" height="100" style={{ overflow: "visible" }}>
            <g
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: "heartbeat 1.5s ease-in-out infinite",
              }}
            >
              <path d="M50,32 C50,20 37,9 24,19 C10,29 14,50 29,62 L50,80 L71,62 C86,50 90,29 76,19 C63,9 50,20 50,32" fill="#E24B4A" />
            </g>
          </svg>
        </div>

        {/* JOY */}
        <div
          style={{
            flex: 1,
            background: "#100c04",
            borderRadius: "14px",
            border: "0.5px solid #2e2208",
            borderTop: "2px solid #EF9F27",
            padding: "22px 12px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            minWidth: "280px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#EF9F27",
              animation: "shimWordJoy 2.4s ease-in-out infinite",
            }}
          >
            Joy
          </span>

          <svg viewBox="0 0 100 105" width="100" height="100" style={{ overflow: "visible" }}>
            <g
              style={{
                transformOrigin: "50px 50px",
                animation: "rotateSun 7s linear infinite",
              }}
            >
              <line x1="50" y1="14" x2="50" y2="24" stroke="#EF9F27" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="14" x2="50" y2="24" stroke="#EF9F27" strokeWidth="3" strokeLinecap="round" transform="rotate(45 50 50)" />
              <line x1="50" y1="14" x2="50" y2="24" stroke="#EF9F27" strokeWidth="3" strokeLinecap="round" transform="rotate(90 50 50)" />
              <line x1="50" y1="14" x2="50" y2="24" stroke="#EF9F27" strokeWidth="3" strokeLinecap="round" transform="rotate(135 50 50)" />
            </g>
            <circle cx="50" cy="50" r="16" fill="#BA7517" />
            <circle cx="50" cy="50" r="11" fill="#EF9F27" />
            <circle cx="50" cy="50" r="6" fill="#FAC775" />

            <circle
              cx="77"
              cy="26"
              r="3.5"
              fill="#EF9F27"
              style={{ animation: "bobDot 0.85s ease-in-out infinite" }}
            />
            <circle
              cx="23"
              cy="26"
              r="3.5"
              fill="#EF9F27"
              style={{ animation: "bobDot 0.85s ease-in-out infinite", animationDelay: "0.2s" }}
            />
          </svg>

        </div>

        {/* PEACE */}
        <div
          style={{
            flex: 1,
            background: "#040f0c",
            borderRadius: "14px",
            border: "0.5px solid #0a2820",
            borderTop: "2px solid #5DCAA5",
            padding: "22px 12px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            minWidth: "280px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#5DCAA5",
            }}
          >
            Peace
          </span>

          <svg viewBox="0 0 100 105" width="100" height="100" style={{ overflow: "visible" }}>
            <circle
              cx="50"
              cy="58"
              r="18"
              fill="none"
              stroke="#5DCAA5"
              strokeWidth="1.2"
              style={{ animation: "rippleOut 3.6s ease-out infinite" }}
            />

            <circle
              cx="50"
              cy="58"
              r="20"
              fill="#04342C"
              style={{ animation: "breathe 4.2s ease-in-out infinite" }}
            />
            <circle
              cx="50"
              cy="58"
              r="14"
              fill="#0F6E56"
              style={{ animation: "breathe 4.2s ease-in-out infinite" }}
            />
            <circle
              cx="50"
              cy="58"
              r="8"
              fill="#5DCAA5"
              style={{ animation: "breathe 4.2s ease-in-out infinite" }}
            />
            <circle cx="50" cy="58" r="3" fill="#9FE1CB" />

            <g style={{ animation: "doveDrift 5s ease-in-out infinite" }}>
              <path
                d="M18,28 Q28,17 40,26 Q52,17 62,28"
                fill="none"
                stroke="#9FE1CB"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="64" cy="26" r="3.5" fill="#9FE1CB" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
