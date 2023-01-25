import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": "asos2.p.rapidapi.com",
          },
        });
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  const refresh = () => {
    setLoading(true);
    setError(null);
    axios
      .get(url, {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  return { data, loading, error, refresh };
};

export default useApi;
