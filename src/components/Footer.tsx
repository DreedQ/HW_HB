import { FunctionComponent } from "react";
import styled from "styled-components";
import Wrapper from "./UI/Wrapper";
import logo from "./images/logo 1.svg";
import logo_insta from "./images/footer/icon_insta.svg";
import logo_fb from "./images/footer/icon_fb.svg";
import logo_vk from "./images/footer/icon_vk.svg";
import logo_VISA from "./images/footer/visa_PNG30.png";
import logo_WP from "./images/footer/webPay.png";
import logo_VVIsa from "./images/footer/verified-by-visa 1.png";
import logo_MC from "./images/footer/1280px-Mastercard-logo 1.png";
import logo_MCSecure from "./images/footer/MCsecurecode.png";
import logo_BelCard from "./images/footer/logotip-belkart-v-odnom-tsvete.png";

interface FooterProps {}
const FooterStyled = styled.footer`
  width: 100%;
  max-height: 250px;
  height: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 0px -11px 40px rgba(39, 95, 158, 0.05);
  padding-top: 39px;
  padding-bottom: 51px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  .footer_underLogo {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #8291a3;
    margin-top: 10px;
  }
  .footer_info {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #8291a3;
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  .footer_menu {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    &:last-child {
      margin: 0;
    }
  }
  .footer_menuItem {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1e2123;
    margin: 0 0 21px 0;
    &_last {
      margin: 0 0 12px 0;
    }
    &_cities {
      margin: 0;
    }
  }
  .footer_item {
    color: #8291a3;
    margin: 0 0 8px 0;
  }
  .footer_menuApartments {
    display: flex;
    height: 90px;
    width: 460px;
    font-weight: 400;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <FooterStyled>
      <Wrapper
        direction="column"
        width="13%"
        padding="0 30px 0 80px"
        justify="space-between"
      >
        {" "}
        <Wrapper direction="column" align="flex-start">
          <img src={logo} alt="logo" />
          <p className="footer_underLogo">СДАЁМ БАЙ</p>
        </Wrapper>
        <Wrapper direction="column">
          {" "}
          <p className="footer_info">ИП Шушкевич Андрей Викторович</p>
          <p className="footer_info">
            УНП 192602485 Минским горисполкомом 10.02.2016
          </p>
          <p className="footer_info">
            220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 +375 29 621 48 33,
            sdaem@sdaem.by
          </p>
          <p className="footer_info"> Режим работы: 08:00-22:00</p>
        </Wrapper>
      </Wrapper>
      <Wrapper display="column" width="70%">
        <Wrapper height="120px">
          <Wrapper width="65%">
            <ul className="footer_menu">
              <li className="footer_menuItem">Коттеджи и усадьбы</li>
              <li className="footer_menuItem">Бани и сауны</li>
              <li className="footer_menuItem">Авто на прокат</li>
              <li className="footer_menuItem footer_menuItem_last">Квартиры</li>
              <li className="footer_menuItem footer_menuItem_cities">
                {" "}
                <ul className="footer_menuApartments">
                  <li className="footer_item">Квартиры в Минске</li>
                  <li className="footer_item">Квартиры в Гомеле</li>
                  <li className="footer_item">Квартиры в Бресте</li>
                  <li className="footer_item">Квартиры в Витебске</li>
                  <li className="footer_item">Квартиры в Гродно</li>
                  <li className="footer_item">Квартиры в Могилеве</li>
                </ul>
              </li>
            </ul>
          </Wrapper>
          <Wrapper>
            <ul>
              <li className="footer_item">Новости</li>
              <li className="footer_item">Размещение и тарифы </li>
              <li className="footer_item">Объявления на карте</li>
              <li className="footer_item">Контакты</li>
            </ul>
          </Wrapper>
        </Wrapper>
        <Wrapper justify="space-between" padding="0 161px 0 40px">
          <Wrapper align="center" justify="space-between" width="30%">
            Мы в соцсетях
            <img src={logo_insta} alt="" /> <img src={logo_vk} alt="" />
            <img src={logo_fb} alt="" />
          </Wrapper>
          <Wrapper align="center" justify="space-between" width="35%">
            <img src={logo_VISA} alt="" />
            <img src={logo_WP} alt="" />
            <img src={logo_VVIsa} alt="" />
            <img src={logo_MC} alt="" />
            <img src={logo_MCSecure} alt="" />
            <img src={logo_BelCard} alt="" />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </FooterStyled>
  );
};

export default Footer;
