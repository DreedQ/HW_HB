import { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import Wrapper from "../../components/UI/Wrapper";
import photo from "../../components/images/photo1.png";
import dots from "../../components/images/dots.svg";

interface NotFoundPageProps {}

const NotFoundStyled = styled.div`
  width: 100%;
  height: 669px;
  position: relative;
  .back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .layer1 {
      position: absolute;
      width: 100%;
      height: 669px;
      left: 0px;
      top: 0;
      background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
    }
    .layer2 {
      position: absolute;
      width: 100%;
      height: 669px;
      left: 0px;
      top: 0;
      background: linear-gradient(360deg, #7e6af3 15.95%, #6540cd 63.1%);
    }
    .layer3 {
      mix-blend-mode: overlay;
      opacity: 0.95;
      filter: blur(2.5px);
      width: 100%;
      height: 669px;
    }
  }
  .dots {
    width: 62px;
    height: 62px;
  }
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    margin: 0;
  }
  .desc {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
  .err-num {
    font-size: 213px;
    font-weight: 700;
    color: #ffffff;
    opacity: 0.3;
    text-shadow: 0px 1px 30px rgba(0, 0, 0, 0.25);
  }
`;
const NotFoundPage: FunctionComponent<NotFoundPageProps> = () => {
  return (
    <NotFoundStyled>
      <div className="back">
        <div className="layer1" />
        <div className="layer2" />
        <img className="layer3" src={photo} alt="" />
      </div>
      <Wrapper height="100%" justify="space-evenly" align="center">
        <Wrapper height="50%">
          <img className="dots" src={dots} alt="" />
        </Wrapper>
        <Wrapper align="center">
          <Wrapper direction="column" opacity="1" width="40%">
            <h1>Ошибка 404</h1>
            <p className="desc">
              Возможно, у вас опечатка в адресе страницы, или её просто не
              существует
            </p>
            <Button>Вернуться на главную</Button>
          </Wrapper>
          <Wrapper width="50%">
            <p className="err-num">404</p>
          </Wrapper>
        </Wrapper>
        <Wrapper height="50%" align="flex-end">
          <img className="dots" src={dots} alt="" />
        </Wrapper>
      </Wrapper>
    </NotFoundStyled>
  );
};

export default NotFoundPage;
