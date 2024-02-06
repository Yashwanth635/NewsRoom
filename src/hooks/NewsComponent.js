import React from "react";
import useNewsData from "./useNewsData";

const NewsComponent = ({ category, searchTerm }) => {
  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {newsData.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{article.content}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
