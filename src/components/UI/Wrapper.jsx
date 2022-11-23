import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position || "relative"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  min-width: ${(props) => props.minWidth || "initial"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  cursor: ${(props) => props.cursor || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  gap: ${(props) => props.gap || "0"};
  overflow-y: ${(props) => props.overflowY || "unset"};
  box-shadow: ${(props) => props.shadow || "none"};
  background: ${(props) => props.background || "initial"};
  opacity: ${(props) => props.opacity || "initial"};
`;

const Wrapper = (props) => {
  return <WrapperStyled {...props} />;
};
export default Wrapper;
