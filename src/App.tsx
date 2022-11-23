import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./router/Layout";
import NotFoundPage from "./router/pages/NotFoundPage";
import NewsList from "./router/pages/NewsList";
import NewsListItem from "./router/pages/NewsListItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:title" element={<NewsListItem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
