// api.js
// api.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dummyjson.com';

const useFetchData = (endpoint) => {
  const [myData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Unable to fetch data from the server.');
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { myData, loading, error };
};

export default useFetchData;
