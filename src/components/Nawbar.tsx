import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "./UI/Wrapper";
import logo from "./images/logo 1.svg";
import point from "./images/Point_on_map.svg";
import Button from "./UI/Button";

interface NavbarProps {}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0;
    li {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #8291a3;
      height: -webkit-fill-available;
      #point {
        width: 12px;
        height: 15px;
        margin-left: 15px;
        path {
          fill: #ffd54f;
        }
      }
    }
  }
  .menu {
    li {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #1e2123;
      height: auto;
    }
  }
  .menu_logIn {
    color: #664ef9;
  }
  .active {
    color: #1e2123;
    border-bottom: 3px solid #ffd54f;
  }
`;

const Navbar: FC<NavbarProps> = () => {
  return (
    <NavbarStyled>
      <Wrapper
        justify="space-between"
        background="#F8F8F8"
        height="40px"
        padding="0 80px"
      >
        <Wrapper width="58%" align="center">
          <ul>
            <li>
              <p>Главная</p>
            </li>
            <li>
              <Link to="/news">
                <p> Новости</p>
              </Link>
            </li>
            <li>
              <p>Размещение и тарифы</p>
            </li>
            <li className="active">
              <p>
                <img src={point} alt="point" /> Объявления на карте
              </p>
            </li>
            <li>
              <p>Контакты</p>
            </li>
          </ul>
        </Wrapper>
        <Wrapper width="30%" align="center">
          <ul>
            <li>
              <p>
                Закладки{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="5 0 40 40"
                >
                  <path
                    d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"
                    stroke="#8291A3"
                    strokeWidth="2"
                  />
                </svg>
              </p>
            </li>
            <li className="menu_logIn">
              <p>Вход и регистрация</p>
            </li>
          </ul>
        </Wrapper>
      </Wrapper>
      <Wrapper
        shadow="0px 10px 20px rgba(0, 0, 0, 0.08)"
        height="60px"
        align="center"
        padding="0 80px"
      >
        <ul className="menu">
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            Квартиры на сутки{" "}
            <svg
              id="point"
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z"
                fill="#1E2123"
              />
            </svg>
          </li>
          <li>Коттеджи и усадьбы</li>
          <li>Бани и Сауны</li>
          <li>Авто напрокат</li>
          <li>
            <Button violetGradient type="button">
              + Разместить объявление
            </Button>
          </li>
        </ul>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
