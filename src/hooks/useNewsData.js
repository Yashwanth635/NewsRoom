import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
    console.log('category',category);
    console.log('searchTerm',searchTerm);
    console.log('App opened');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        

        //const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        //const apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;
        const apiUrl = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=868eff1cf6b2c754da64a0ae4cfc7364';
        //const apiUrl = ' https://newsapi.org/v2/everything?q=Apple&from=2024-01-31&sortBy=popularity&apiKey=565c9bd1d4ab4f4fbdc57210cabb0ac0';
        const categoryParam = category ? `&q=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParam + searchParam;
        //const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=868eff1cf6b2c754da64a0ae4cfc7364'
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;
