import { useState, useEffect } from "react";
import { colors, fonts } from "../styles/theme";

const SPLIT_AT = "Sunday School v".length;
const FULL_TEXT = "Sunday School Mock Quiz";
const TYPING_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE_FULL = 2000;

// Inject animations once
if (typeof document !== "undefined" && !document.getElementById("title-banner-effects")) {
  const el = document.createElement("style");
  el.id = "title-banner-effects";
  el.textContent = `
    @keyframes shimmer {
      0% { background-position: -300% center; }
      100% { background-position: 300% center; }
    }

    @keyframes particleReveal {
      0% {
        opacity: 0;
        filter: blur(10px);
        letter-spacing: 0.4em;
        transform: translateY(14px) scale(0.96);
      }
      60% {
        opacity: 0.9;
        filter: blur(2px);
      }
      100% {
        opacity: 1;
        filter: blur(0);
        letter-spacing: -0.02em;
        transform: translateY(0) scale(1);
      }
    }
  `;
  document.head.appendChild(el);
}

export default function TitleBanner() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | deleting | revealed
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink
  useEffect(() => {
    if (phase === "revealed") return;

    const id = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => clearInterval(id);
  }, [phase]);

  // Typewriter sequence:
  // type once -> delete once -> particle reveal -> stay forever
  useEffect(() => {
    if (phase === "revealed") return;

    if (phase === "typing" && displayed.length < FULL_TEXT.length) {
      const id = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(id);
    }

    if (phase === "typing" && displayed.length === FULL_TEXT.length) {
      const id = setTimeout(() => {
        setPhase("deleting");
      }, PAUSE_FULL);
      return () => clearTimeout(id);
    }

    if (phase === "deleting" && displayed.length > 0) {
      const id = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length - 1));
      }, ERASE_SPEED);
      return () => clearTimeout(id);
    }

    if (phase === "deleting" && displayed.length === 0) {
      // bring text back like particles and stop forever
      setDisplayed(FULL_TEXT);
      setPhase("revealed");
      setCursorVisible(false);
    }
  }, [displayed, phase]);

  const plainPart = displayed.slice(0, Math.min(displayed.length, SPLIT_AT));
  const shimmerPart = displayed.length > SPLIT_AT ? displayed.slice(SPLIT_AT) : "";

  const revealStyle =
    phase === "revealed"
      ? {
          animation: "particleReveal 1.4s ease-out forwards",
        }
      : {};

  return (
    <div style={styles.wrap}>
      <p style={styles.topLabel}>RCCG Lighthouse Banbury</p>

      <div style={styles.typeRow}>
        <span style={{ ...styles.typeText, ...revealStyle }}>{plainPart}</span>

        {shimmerPart && (
          <span style={{ ...styles.shimmerText, ...revealStyle }}>
            {shimmerPart}
          </span>
        )}

        {phase !== "revealed" && (
          <span
            style={{
              ...styles.cursor,
              opacity: cursorVisible ? 1 : 0,
            }}
          >
            |
          </span>
        )}
      </div>

      <div style={styles.rule} />
    </div>
  );
}

const baseText = {
  fontFamily: fonts.serif,
  fontSize: "clamp(24px, 4vw, 42px)",
  fontWeight: "700",
  letterSpacing: "-0.02em",
  lineHeight: "1.1",
};

const styles = {
  wrap: {
    textAlign: "center",
    padding: "8px 24px 0",
    fontFamily: fonts.mono,
  },
  topLabel: {
    fontSize: "12px",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "#EF9F27",
    margin: "0 0 16px",
    fontFamily: fonts.mono,
  },
  typeRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "56px",
  },
  typeText: {
    ...baseText,
    color: colors.text,
  },
  shimmerText: {
    ...baseText,
    background: "linear-gradient(90deg, #f0ede8 20%, #EF9F27 40%, #fff8ee 55%, #EF9F27 70%, #f0ede8 80%)",
    backgroundSize: "300% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "shimmer 2.2s linear infinite",
  },
  cursor: {
    fontFamily: fonts.mono,
    fontSize: "clamp(24px, 4vw, 42px)",
    fontWeight: "300",
    color: "#EF9F27",
    marginLeft: "2px",
    transition: "opacity 0.1s",
    lineHeight: "1.1",
  },
  rule: {
    width: "48px",
    height: "2px",
    background: "#2e2c28",
    margin: "24px auto 0",
  },
};

