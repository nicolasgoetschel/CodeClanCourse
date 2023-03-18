import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import SearchForm from "../components/SearchForm";

export default function NewsBox() {
  const [articles, setArticles] = useState([]);
  // Define the state variable articles and its corresponding 
  // setState function with an initial value of an empty array
  const [search, setSearch] = useState("");
  // Define the state variable search and its corresponding 
  //setState function with an initial value of an empty string

  async function getData() {
    // Define an asynchronous function getData to fetch data from the Hacker News API
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    // Fetch the topstories.json endpoint from the Hacker News API

    const jsonResponse = await response.json();
    // Convert the response to JSON

    const ids = jsonResponse.splice(20, 40);
    // Get an array of 20-40 article ids from the jsonResponse

    const urls = ids.map(
      (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    // Create an array of URLs for each article based on their ids


    const articlePromises = await urls.map(async (url) => {
      // Create an array of promises for each article fetch request

      const res = await fetch(url);
      // Fetch the article data from the Hacker News API

      return await res.json();
      // Return the article data as JSON
    });

    const articleData = await Promise.all(articlePromises);
    // Wait for all of the promises to resolve and get an array of article data objects

    if (search) {
      // Check if the search state variable has a value

      const filteredArticles = articleData.filter((article) =>
        article.title.includes(search)
      );
      // Filter the articles based on the search query

      setArticles(filteredArticles);
      // Update the articles state variable with the filtered articles

    } else {
      setArticles(articleData);
      // Update the articles state variable with all of the articles
    }
  }

  useEffect(() => {
    // Call the getData function whenever the search state variable changes

    getData();
  }, [search]);

  return (
    <main>
      <SearchForm setSearch={setSearch} />
      {/* Render the SearchForm component and pass setSearch function as a prop */}

      <ArticleList articles={articles} />
      {/* Render the ArticleList component and pass the articles state variable as a prop */}
    </main>
  );
}