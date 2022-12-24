export type Theme = {
  [value: string]: {
    name: string,
    foreground: string,
    background: string,
    secondary: string,
    altColor: string,
    altSecondaryColor: string,
    titleFont: string,
    contentFont: string,
  }
}

export const theme: Theme = {
  light: {
    name: "light",
    foreground: "#101c26",
    background: "#FFFFFF",
    secondary: "#2A6041",
    altColor: "#82ff9e",
    altSecondaryColor: "#2A6041",
    titleFont: "'Montserrat', serif",
    contentFont: "'DM Sans', sans-serif",
  },
  dark: {
    name: "dark",
    foreground: "#96ccd9",
    background: "#000000",
    secondary: "#82ff9e",
    altColor: "#cafe48",
    altSecondaryColor: "#82ff9e",
    titleFont: "'Montserrat', serif",
    contentFont: "'DM Sans', sans-serif",
  },
  highContrastDark: {
    name: "high-contrast-dark",
    foreground: "white",
    background: "black",
    secondary: "grey",
    altColor: "black",
    altSecondaryColor: "white",
    titleFont: "'Montserrat', serif",
    contentFont: "'DM Sans', sans-serif",
  },
  highContrastLight: {
    name: "high-contrast-light",
    foreground: "black",
    background: "white",
    secondary: "grey",
    altColor: "white",
    altSecondaryColor: "black",
    titleFont: "'Montserrat', serif",
    contentFont: "'DM Sans', sans-serif",
  },
};
