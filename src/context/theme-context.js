import React from "react";

export const themes = {
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGray",
    buttonBackgroundColor: "Lavender",
    inputBackgroundColor: "Gainsboro",
  },

  dark: {
    backgroundColor: "DarkSlateGray",
    textColor: "AntiqueWhite",
    buttonBackgroundColor: "#232b3c",
    inputBackgroundColor: "#45516d",
  },
};

export const ThemeContext = React.createContext();
