import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",
  fill: "#000",
  color: {
    beige: {
      dark: "rgba(102, 78, 249, 0.1)",
      medium: "#F5F3FF",
      light: "#F8F8F8",
    },
    violet: {
      medium: "#612BFB",
      light: "#664EF9",
    },
    white: "#FFFFFF",
    sienna: "rgba(235, 87, 87, 0.1)",
    mustard: {
      light: "#FFD54F",
      medium: "#FEC100",
    },
    violetGradient: {
      light: "linear-gradient(90deg, #9D94FF 0%, #6B50E9 94.5%)",
      dark: "linear-gradient(90deg, #867CFC 0%, #6929F3 94.5%)",
    },
  },
};

export default { myTheme };
