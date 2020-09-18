import { useState, useEffect } from 'react';
import { yelp, yelpFetch } from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      // const fetchCall = await yelpFetch(
      //   `/search?limit=${50}&term=${encodeURIComponent(
      //     searchTerm
      //   )}&location=${'san jose'}`
      // );
      // const results = await fetchCall.json();

      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong! Please try again later.');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
