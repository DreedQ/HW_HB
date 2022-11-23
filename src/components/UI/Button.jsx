import React from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const ButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 19px;
  border: none;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.font_size || "14px"};
  line-height: 130%;
  background-color: ${theme.myTheme.color.white};
  width: ${(props) => props?.width || "100%"};
  height: ${(props) => props.height || "37px"};
  margin: ${(props) => props.margin || "initial"};
  padding: ${(props) => props.padding || "10px 18px"};
  transition: all 0.5s linear;
  ${(props) =>
    props.beigeLight &&
    css`
      color: ${theme.myTheme.color.violet.light};
      font-size: 14px;
      font-weight: 700;
      background: rgba(102, 78, 249, 0.1);
      border-radius: 17px;
    `}
  ${(props) =>
    props.violetLight &&
    css`
      background: ${theme.myTheme.color.violet.light};
      &:hover {
        background: ${theme.myTheme.color.violet.medium};
      }
    `}
  ${(props) =>
    props.violetGradient &&
    css`
      background: ${theme.myTheme.color.violetGradient.light};
      color: ${theme.myTheme.color.white};
      box-shadow: 0px 15px 40px rgba(0, 96, 206, 0.15);
      &:hover {
        background: ${theme.myTheme.color.violetGradient.dark};
      }
    `}
`;

const Button = (props) => {
  return <ButtonStyle {...props} />;
};
export default Button;
