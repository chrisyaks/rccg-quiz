/**
 * theme.js
 * Optimised for projector / 70-inch TV visibility
 * Designed for clear readability in a room of 100+ viewers.
 */

export const colors = {
  bg: "#0d0d0d",
  surface: "#1a1814",
  border: "#2e2c28",
  borderHover: "#4a4840",
  text: "#f5f1ea",
  muted: "#c7c1b8",
  subtle: "#d8d2c8",

  // Semantic
  success: { bg: "#1a3a24", border: "#3b6d11", text: "#b7e07a" },
  danger: { bg: "#3a1a1a", border: "#a32d2d", text: "#ff7a78" },
  urgent: "#ff6a68",
};

export const fonts = {
  mono: "'DM Mono', 'Courier New', monospace",
  serif: "'DM Serif Display', Georgia, serif",
};

// Shared layout containers
export const layout = {
  page: {
    maxWidth: "110rem",
    margin: "0 auto",
    padding: "80px 48px 100px",
    fontFamily: fonts.mono,
    color: colors.text,
  },

  quizPage: {
    maxWidth: "90rem",
    margin: "0 auto",
    padding: "80px 48px 100px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: fonts.mono,
    color: colors.text,
  },
};

// Typography — projector-safe sizes
export const type = {
  eyebrow: {
    fontSize: "18px",
    letterSpacing: "0.28em",
    color: colors.muted,
    textTransform: "uppercase",
    marginBottom: "18px",
    fontWeight: "600",
  },

  heading: {
    fontSize: "clamp(52px, 7vw, 96px)",
    fontWeight: "700",
    lineHeight: "1.08",
    letterSpacing: "-0.02em",
    color: colors.text,
    margin: "0 0 24px",
    fontFamily: fonts.serif,
  },

  body: {
    fontSize: "24px",
    color: colors.muted,
    margin: "0",
    lineHeight: "1.75",
    fontWeight: "500",
    textAlign: 'center'
  },

  questionText: {
    fontSize: "clamp(34px, 5vw, 56px)",
    fontWeight: "700",
    lineHeight: "1.45",
    letterSpacing: "-0.01em",
    color: colors.text,
    margin: "0 0 56px",
    fontFamily: fonts.serif,
  },

  label: {
    fontSize: "18px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: colors.muted,
    fontWeight: "600",
  },
};

// Reusable component styles
export const components = {
  divider: {
    width: "80px",
    height: "4px",
    background: colors.border,
    margin: "40px 0",
  },

  backBtn: {
    background: "transparent",
    border: `2px solid ${colors.border}`,
    color: colors.text,
    fontSize: "18px",
    fontWeight: "700",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    padding: "16px 28px",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: fonts.mono,
    alignSelf: "flex-start",
    marginBottom: "56px",
    transition: "all 0.2s ease",
  },

  nextBtn: {
    background: colors.text,
    border: "none",
    color: colors.bg,
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "18px 34px",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: fonts.mono,
    transition: "opacity 0.2s ease",
  },

  ghostBtn: {
    background: "transparent",
    border: `2px solid ${colors.border}`,
    color: colors.text,
    fontSize: "17px",
    fontWeight: "600",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "14px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: fonts.mono,
    transition: "all 0.2s ease",
  },
};
