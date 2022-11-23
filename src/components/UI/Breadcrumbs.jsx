/* eslint-disable react/destructuring-assignment */
// import { FC } from "react";
import styled from "styled-components";
import icon_home from "../images/icon_home.svg";
import dot from "../images/icon_dot.svg";

// interface BreadcrumbsProps {
//   title?: string | null;
// }

const BreadcrumbsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  margin: ${(props) => props.margin || "40px 0"};
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #686868;
  }
  .dot {
    margin: 0 7px;
  }
`;

const Breadcrumbs = (props) => {
  return (
    <BreadcrumbsStyled {...props}>
      <img src={icon_home} alt="" />
      <img className="dot" src={dot} alt="" />
      <p>Новости</p>
      {props.title && (
        <>
          <img className="dot" src={dot} alt="" />
          <p>{props.title}</p>
        </>
      )}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
