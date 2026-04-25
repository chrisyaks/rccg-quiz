import { useState } from "react";
import { colors, fonts, layout, type, components } from "../styles/theme";
import TitleBanner from "./TitleBanner";
import LoveJoyPeaceCards from './love-peace-joy'
import logo from '../rccg-lighthouse-logo.webp'

/**
 * SelectionPage
 * Renders a 5×5 grid of question buttons.
 * Taken questions are visually disabled with a red ✕ badge.
 *
 * Props:
 *  - onSelect(index)   : called when a question is picked
 *  - takenQuestions    : number[] — indices already attempted
 *  - onResetProgress   : called when user clears their progress
 */
export default function SelectionPage({ onSelect, takenQuestions, onResetProgress }) {
  const [hovered, setHovered] = useState(null);
  const takenCount = takenQuestions.length;

  return (
    <div style={{ ...layout.page, paddingTop: "0" }}>
           <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "16px 0",
        }}
      >
        <img
          src={logo}
          alt="RCCG Lighthouse Logo"
          style={{
            width: "160px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      {/* ── Animated title banner ── */}
      <TitleBanner />

     <LoveJoyPeaceCards/>

     

      {/* ── Sub-header ── */}
      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        <p style={type.body}>
          Select any number from 1–20 to begin. You have 40 seconds per question.
        </p>
        <div style={components.divider} />

        {/* Progress + reset row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ ...type.label, color: colors.subtle }}>
            {takenCount} / 20 attempted
          </span>
          {takenCount > 0 && (
            <button
              style={components.ghostBtn}
              onClick={onResetProgress}
              title="Clear all progress"
            >
              Reset progress
            </button>
          )}
        </div>
      </div>

      {/* ── Question grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "10px",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => {
          const taken = takenQuestions.includes(i);
          const isHovered = hovered === i && !taken;

          return (
            <QuestionButton
              key={i}
              number={i + 1}
              taken={taken}
              hovered={isHovered}
              onMouseEnter={() => !taken && setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => !taken && onSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   QuestionButton — individual grid cell
───────────────────────────────────────────── */
function QuestionButton({ number, taken, hovered, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div
      style={{ position: "relative", aspectRatio: "1" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        disabled={taken}
        onClick={onClick}
        style={{
          width: "100%",
          height: "100%",
          background: taken
            ? "#1a1814"
            : hovered
            ? colors.text
            : "transparent",
          border: `1px solid ${
            taken ? "#222" : hovered ? colors.text : colors.border
          }`,
          borderRadius: "8px",
          color: taken ? "#3a3835" : hovered ? colors.bg : colors.text,
          fontSize: "16px",
          fontWeight: "600",
          cursor: taken ? "not-allowed" : "pointer",
          transition: "all 0.15s ease",
          fontFamily: fonts.mono,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          // Strike-through effect for taken questions
          textDecoration: taken ? "line-through" : "none",
          textDecorationColor: "#3a3835",
        }}
      >
        {number}
      </button>

      {/* ── Red ✕ badge — shown only when taken ── */}
      {taken && (
        <span
          aria-label="Question already taken"
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: colors.danger.bg,
            border: `1px solid ${colors.danger.border}`,
            color: colors.danger.text,
            fontSize: "9px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ✕
        </span>
      )}
    </div>
  );
}
