import { FC } from "react";
import styled from "styled-components";
// import Footer from "../../components/Footer";

// import Header from "../../components/Header";
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import Container from "../../components/UI/Container";
import NewsCard from "../../components/UI/NewsCard";
import Pagination from "../../components/UI/Pagination";
import Search from "../../components/UI/Search";
import Wrapper from "../../components/UI/Wrapper";

interface NewsListProps {}
const NewsListStyled = styled.div`
  width: 100%;
  margin-bottom: 100px;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: #1e2123;
  }
  .searchBg {
    position: absolute;
    width: 100%;
    height: 999.21px;
    left: 45%;
    top: -55px;
    background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
    opacity: 0.1;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    z-index: -1;
  }
`;
const NewsList: FC<NewsListProps> = () => {
  return (
    <NewsListStyled>
      {/* <Header /> */}
      <Container>
        <Breadcrumbs />
        <Wrapper align="center" justify="space-between" overflowX="clip">
          <h2>Новости </h2>
          <Search />
          <div className="searchBg" />
        </Wrapper>

        <Wrapper flexWrap="wrap" justify="space-between">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Wrapper>
        <Pagination />
      </Container>
      {/* <Footer /> */}
    </NewsListStyled>
  );
};

export default NewsList;
