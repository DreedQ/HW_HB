import { FunctionComponent } from "react";
import styled from "styled-components";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import Wrapper from "../../components/UI/Wrapper";
import image from "../../components/images/flats/c3a79713463f6442f3849f7239f3804e 1.png";
import dots from "../../components/images/dots.svg";
import ShearSocial from "../../components/UI/ShearSocial";
import Container from "../../components/UI/Container";
import NewsCard from "../../components/UI/NewsCard";

interface NewsListItemProps {}

const NewsListItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: #1e2123;
    margin: 10px;
  }
  .date {
    background: rgba(102, 78, 249, 0.1);
    border-radius: 18px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #664ef9;
    padding: 10px 16px;
  }
  .img {
    width: 100%;
    margin: 0 0 40px 0;
    filter: drop-shadow(0px 20px 40px rgba(39, 95, 158, 0.1));
    border-radius: 10px;
  }
  .dots {
    position: absolute;
    left: -130px;
    top: 91px;
  }
  .headBack {
    position: absolute;
    left: 0;
    width: 100%;
    height: 280px;
    background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
    opacity: 0.1;
    z-index: -1;
  }
  .bottomBack {
    position: absolute;
    height: 737px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
    opacity: 0.1;
  }
  .bottom_h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #1e2123;
  }
`;
const NewsListItem: FunctionComponent<NewsListItemProps> = () => {
  return (
    <NewsListItemStyled>
      <Container>
        <div className="headBack" />
        <Breadcrumbs
          title="Линия Сталина: суровый отдых в усадьбах на сутки "
          margin="46px 0 5px"
        />
        <h2>Линия Сталина: суровый отдых в усадьбах на сутки </h2>
        <Wrapper width="100%" justify="space-between" margin="0 0 26px 0">
          <p className="date">14 Января 2008</p>
          <ShearSocial />
        </Wrapper>
        <Wrapper width="100%" direction="column">
          <img className="img" src={image} alt="" />
          <img className="dots" src={dots} alt="" />

          <p>
            Итак, утром вы выезжаете в путь по Молодеченской трассе. Если
            автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от
            железнодорожного вокзала. Остановка называется «Линия Сталина» -
            да-да, именно здесь вы и проведёте ближайшие несколько часов, а
            вероятнее всего – останетесь до самого вечера.
          </p>
          <p>
            «Линия Сталина» - это уникальный музейный комплекс, располагающийся
            под открытым небом. Поэтому желательно приезжать сюда в хорошую
            погоду. Его территория поистине огромна: целых 26 га. Такое название
            дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века
            именовали цепь укреплений, созданную для защиты государственной
            границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой
            годовщине Победы в Великой Отечественной войне.
          </p>
          <p>
            Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в
            направлении Молодечно, то можете провести в музейном комплексе хоть
            целый день. Здесь действительно есть на что посмотреть: ДОТы,
            испещрённые следами немецких снарядов, окопы, противотанковые
            заграждения, зенитные пушки, бронетехника… Вы встретите даже
            элементы ракетных войск – и всё это не муляжи, а настоящие боевые
            орудия! За отдельную плату вам предложат пострелять из винтовки и
            пулемёта, а также прокатиться на танке. Проголодались? Загляните в
            кафе и насладитесь сытным домашним обедом.
          </p>
          <p>
            {" "}
            Посетить «Линию Сталина» будет интересно как взрослым, так и детям.
            Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо
            долгой дороги домой остановиться на ночь в уютном современном
            коттедже. На сайте можно выбрать и снять посуточно наиболее удобный
            для вас вариант. Проведите незабываемые выходные за городом –
            приезжайте в «Линию Сталина»!
          </p>
          <p>Отличная усадьба в 10 км от "Линии Сталина".</p>
        </Wrapper>
      </Container>

      <Wrapper margin="65px 0 0 0 " width="100%" height="737px">
        <Wrapper direction="column" padding="61px 70px 100px 80px">
          <h2 className="bottom_h2">Читайте также</h2>
          <Wrapper>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Wrapper>
        </Wrapper>
        <div className="bottomBack" />
      </Wrapper>
    </NewsListItemStyled>
  );
};

export default NewsListItem;
