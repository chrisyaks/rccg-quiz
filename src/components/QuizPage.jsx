import { useState, useEffect, useCallback } from "react";
import OptionButton from "./OptionButton";
import QUESTIONS from "../data/questions";
import { colors, fonts, layout, type, components } from "../styles/theme";

const TIMER_MAX = 40;

/**
 * QuizPage
 * Displays a single question, 4 options, and a 30-second countdown.
 *
 * Props:
 *  - questionIndex : number (0-24)
 *  - onBack        : () => void — navigate back to selection
 */
export default function QuizPage({ questionIndex, onBack }) {
  const question = QUESTIONS[questionIndex];

  const [timeLeft, setTimeLeft]   = useState(TIMER_MAX);
  const [selected, setSelected]   = useState(null);   // index of chosen option
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expired, setExpired]     = useState(false);

  const answered = selected !== null || expired;
  const isCorrect = selected === question.answer;
  const urgent = timeLeft <= 8;
  const timerPct = timeLeft / TIMER_MAX;

  // ── Countdown ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (answered) return;
    if (timeLeft <= 0) { setExpired(true); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, answered]);

  // ── Answer selection ───────────────────────────────────────────────────────
  const handleSelect = useCallback(
    (idx) => { if (!answered) setSelected(idx); },
    [answered]
  );

  // ── Option state helper ────────────────────────────────────────────────────
  function getOptionState(idx) {
    if (!answered) return hoveredIdx === idx ? "hovered" : "default";
    if (idx === question.answer)  return selected === idx ? "correct" : "reveal";
    if (idx === selected)         return "wrong";
    return "default";
  }

  // ── Result text ───────────────────────────────────────────────────────────
  function resultMessage() {
    if (expired)    return `Time's up! Correct answer: ${question.options[question.answer]}`;
    if (isCorrect)  return "Correct!";
    return `Wrong — correct answer: ${question.options[question.answer]}`;
  }

  return (
    <div style={layout.quizPage}>

      {/* Back button */}
      <button style={components.backBtn} onClick={onBack}>
        ← Back
      </button>

      {/* ── Meta row: question number + timer ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <span style={type.label}>Question {questionIndex + 1} of 25</span>
        <Timer timeLeft={timeLeft} timerPct={timerPct} urgent={urgent} />
      </div>

      {/* ── Question ── */}
      <p style={type.questionText}>{question.q}</p>

      {/* ── Options ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "auto",
        }}
      >
        {question.options.map((opt, idx) => (
          <OptionButton
            key={idx}
            index={idx}
            text={opt}
            state={getOptionState(idx)}
            onClick={() => handleSelect(idx)}
            onMouseEnter={() => !answered && setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>

      {/* ── Result banner (shown after answer or timeout) ── */}
      {answered && (
        <ResultBanner
          correct={isCorrect && !expired}
          message={resultMessage()}
          onDone={onBack}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Timer — bar + seconds display
───────────────────────────────────────────── */
function Timer({ timeLeft, timerPct, urgent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Progress bar */}
      <div
        style={{
          width: "120px",
          height: "4px",
          background: colors.border,
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${timerPct * 100}%`,
            background: urgent ? colors.urgent : colors.text,
            borderRadius: "2px",
            transition: "width 1s linear, background 0.3s ease",
          }}
        />
      </div>

      {/* Seconds */}
      <span
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: urgent ? colors.urgent : colors.text,
          minWidth: "28px",
          textAlign: "right",
          fontVariantNumeric: "tabular-nums",
          fontFamily: fonts.mono,
          transition: "color 0.3s ease",
        }}
      >
        {timeLeft}s
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ResultBanner — shown after answering
───────────────────────────────────────────── */
function ResultBanner({ correct, message, onDone }) {
  const palette = correct ? colors.success : colors.danger;

  return (
    <div
      style={{
        marginTop: "28px",
        padding: "16px 20px",
        borderRadius: "10px",
        background: palette.bg,
        border: `1px solid ${palette.border}`,
        color: palette.text,
        fontSize: "14px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        fontFamily: fonts.mono,
      }}
    >
      <span>{message}</span>
      <button style={components.nextBtn} onClick={onDone}>
        Done
      </button>
    </div>
  );
}
