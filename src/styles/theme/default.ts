const theme = {
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 100,
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.5rem", // 24px
      xxxlarge: "1.75rem" // 28px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.5rem", // 24px
    medium: "2rem", // 32px
    large: "2.5rem" // 40px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    background: "#c7cfd9",
    elements: "#202024",
    divider: "#aab3c0",
    placeholder: "#7C7C8A",
    label: "#8D8D99",
    text: "#040506",
    white: "#FFFFFF",
    light: "#f2f3f5",
    red: "#F16165",
    green: "#00B37E"
  }
} as const;

export default theme;
