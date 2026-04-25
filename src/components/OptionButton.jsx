import { colors, fonts } from "../styles/theme";

const LABELS = ["A", "B", "C", "D"];

/**
 * OptionButton
 * Renders a single multiple-choice answer option.
 *
 * Props:
 *  - index      : 0-3
 *  - text       : answer string
 *  - state      : "default" | "hovered" | "correct" | "wrong" | "reveal"
 *  - onClick    : handler
 *  - onMouseEnter / onMouseLeave
 */
export default function OptionButton({ index, text, state, onClick, onMouseEnter, onMouseLeave }) {
  const style = resolveStyle(state);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={state === "correct" || state === "wrong" || state === "reveal"}
      style={{
        padding: "18px 20px",
        borderRadius: "10px",
        border: `1px solid ${style.border}`,
        background: style.bg,
        color: style.text,
        cursor: state === "default" || state === "hovered" ? "pointer" : "default",
        textAlign: "left",
        fontSize: "1.5rem",
        lineHeight: "1.4",
        fontWeight: "500",
        fontFamily: fonts.mono,
        transition: "all 0.15s ease",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        width: "100%",
      }}
    >
      {/* Letter label */}
      <span
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          letterSpacing: "0.08em",
          opacity: 0.65,
          flexShrink: 0,
          marginTop: "1px",
          color: "inherit",
        }}
      >
        {LABELS[index]}
      </span>
      {text}
    </button>
  );
}

function resolveStyle(state) {
  switch (state) {
    case "correct":
      return { bg: colors.success.bg, border: colors.success.border, text: colors.success.text };
    case "wrong":
      return { bg: colors.danger.bg, border: colors.danger.border, text: colors.danger.text };
    case "reveal":
      return { bg: colors.success.bg, border: colors.success.border, text: colors.success.text };
    case "hovered":
      return { bg: "#1e1c18", border: colors.borderHover, text: colors.text };
    default:
      return { bg: "transparent", border: colors.border, text: colors.subtle };
  }
}
