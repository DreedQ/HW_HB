import { FC } from "react";
import styled from "styled-components";

const DropDownStyled = styled.div`
position: relative;
width: fit-content;
select {
  background: #f8f8f8;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  padding: 9px 69px 11px 12px;
  appearance:none;

  &:hover {
    background: rgba(102, 78, 249, 0.1);
  }
  &:focus-visible {
    outline: 2px solid rgba(102, 78, 249, 0.8);
    background: #ffffff;
  }
  option {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    padding: 9px 69px 11px 12px;
    &:hover:
    background: #F8F8F8;
  }
}
&::before{
  content:'‹';
  position:absolute;
  right: 15px;
  top: 15%;
  font-size: 1.5em;
  font-weight: 500;
  transform:rotateZ(-90deg);
  display: block;
  color: #664EF9;
}
`;

interface DropDownProps {}

const DropDown: FC<DropDownProps> = () => {
  return (
    <DropDownStyled>
      <select name="" id="">
        <option value="">Выберите</option>
        <option value="">Минск</option>
        <option value="">Город 2</option>
        <option value="">Город 3</option>
        <option value="">Город 4</option>
        <option value="">Город 5</option>
      </select>
    </DropDownStyled>
  );
};

export default DropDown;
