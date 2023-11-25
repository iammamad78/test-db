import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(url, query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (err) {
        setData([]);
        console.log(err?.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, query]);

  return { isLoading, data };
}
