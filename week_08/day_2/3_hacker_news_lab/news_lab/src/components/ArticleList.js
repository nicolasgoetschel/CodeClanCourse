import React from "react";
import Article from "./Article";
import "./ArticleList.css";

export default function ArticleList({ articles }) {
// Define the ArticleList component which expects an array of articles as a prop
  if (articles.length) {
  // Check if the articles array is not empty
    const articleList = articles.map((article) => {
    // Create an array of Article components for each article in the articles array
      return <Article key={article.id} article={article} />;
      // The key prop is used to uniquely identify each element in the array and improve performance
    });

    return <section>{articleList}</section>;
    // Render a section element containing the articleList array of Article components
  }
}