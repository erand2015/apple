// tailwind.config.ts
export default {
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "border-beam": "border-beam var(--duration) infinite linear",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
    },
  },
}