export default {
  theme: {
    extend: {
      keyframes: {
        smoothZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        colorPulse: {
          "0%,100%": { backgroundColor: "#4f46e5" }, // indigo
          "50%": { backgroundColor: "#ec4899" }, // pink
        },
      },
      animation: {
        smoothZoom: "smoothZoom 16s ease-in-out infinite",
        colorPulse: "colorPulse 4s ease-in-out infinite",
      },
    },
  },
};
