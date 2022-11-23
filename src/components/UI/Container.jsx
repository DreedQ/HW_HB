import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding || "0 80px"};
  overflow-x: ${(props) => props.overflowX || "clip"};
`;

const Container = (props) => {
  return <ContainerStyled {...props} />;
};

export default Container;
