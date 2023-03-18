import React from "react"; 
import "./Article.css"; 

export default function Article({ article }) {
  // Define the Article component which expects an article object as a prop
  return (
    <article> 
      {/* Render an article element */}
      <p>{article.title}</p> 
      {/* Render the title which was passed as a property of the article object */}
    </article>
  );
} 
