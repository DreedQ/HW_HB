import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import flat from "../images/flats/c3a79713463f6442f3849f7239f3804e 1.png";
import Button from "./Button";

interface NewsCardProps {}
const NewsCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 406px;
  max-height: 500px;
  width: 32%;
  background: #fffefe;
  border-radius: 10px;
  margin: 30px auto;
  filter: drop-shadow(0px 20px 40px rgba(135, 124, 202, 0.15));
  img {
    border-radius: 10px;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #1e2123;
    margin: 0;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
  }
  .card_description {
    padding-bottom: 25px;
    border-bottom: 2px solid #f8f8f8;
  }
  .card_date {
    background: #f8f8f8;
    border-radius: 18px;
    padding: 10px 8px;
  }
`;
const NewsCard: FunctionComponent<NewsCardProps> = () => {
  return (
    <NewsCardStyled>
      <img src={flat} alt="" />
      <Wrapper direction="column" padding="30px 20px 24px">
        <h4>Линия Сталина: суровый отдых в усадьбах на сутки</h4>
        <p className="card_description">
          Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на
          улице хорошая погода, хочется уехать из города, чтобы сменить
          обстановку. Например, снять коттедж на сутки для семьи или большой
          компании друзей. А...
        </p>
        <Wrapper align="center" justify="space-between">
          <p className="card_date">14 Января 2008</p>
          <Button width="81px" beigeLight>
            <Link to="/news/Линия Сталина: суровый отдых в усадьбах на сутки">
              {" "}
              Читать
            </Link>
          </Button>
        </Wrapper>
      </Wrapper>
    </NewsCardStyled>
  );
};

export default NewsCard;
