// tailwind.config.js or theme.js

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: "#1E1E1E",
          text: "#D4D4D4",
          muted: "#6A9955",
          accentBlue: "#569CD6",
          accentOrange: "#CE9178",
          accentYellow: "#DCDCAA",
          sidebar: "#333333",
          highlight: "#007ACC",
        },
      },
      fontFamily: {
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
  safelist: [
  'bg-vscode-bg', 'text-vscode-text', 'text-vscode-muted', 
  'bg-vscode-sidebar', 'text-vscode-highlight', 
  'text-vscode-accentBlue', 'text-vscode-accentOrange', 'text-vscode-accentYellow'
],
};
