import { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "./Button";
import search from "../images/icon_search.svg";

interface SearchProps {}
const SearchStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 96, 206, 0.05);
  border-radius: 20px;
  width: 40%;
  input {
    border-radius: 20px;
    border: none;
    width: 100%;
    padding: 9px 21px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    background: #ffffff;
    &:focus-visible {
      outline: none;
    }
  }
`;

const Search: FunctionComponent<SearchProps> = () => {
  return (
    <SearchStyled>
      <input type="text" placeholder="Поиск по статьям" />
      <Button violetLight width="auto">
        <img src={search} alt="" />
      </Button>
    </SearchStyled>
  );
};

export default Search;
