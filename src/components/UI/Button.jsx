import React from "react";
import styled, { css } from "styled-components";

const theme = {
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

const ButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 19px;
  border: none;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.font_size || "14px"};
  line-height: 130%;
  background-color: ${theme.color.white};
  width: ${(props) => props?.width || "100%"};
  height: ${(props) => props.height || "37px"};
  margin: ${(props) => props.margin || "initial"};
  padding: ${(props) => props.padding || "10px 18px"};
  transition: all 0.5s linear;
  ${(props) =>
    props.violetGradient &&
    css`
      background: ${theme.color.violetGradient.light};
      color: ${theme.color.white};
      box-shadow: 0px 15px 40px rgba(0, 96, 206, 0.15);
      &:hover {
        background: ${theme.color.violetGradient.dark};
      }
    `}
`;

const Button = (props) => {
  return <ButtonStyle {...props} />;
};
export default Button;
