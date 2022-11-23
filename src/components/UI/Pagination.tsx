import { FunctionComponent } from "react";
import styled from "styled-components";

interface PaginationProps {}
const PaginationStyled = styled.div`
  display: flex;
  margin: 80px 0 102px;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #686868;
    margin: 0 7px;
  }
  .active {
    color: #000000;
    border-bottom: 2px solid #ffd54f;
  }
`;

const Pagination: FunctionComponent<PaginationProps> = () => {
  return (
    <PaginationStyled>
      <p className="active">1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>...</p>
      <p>11</p>
    </PaginationStyled>
  );
};

export default Pagination;
