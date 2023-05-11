import { useState, useEffect } from 'react';
import axios from 'axios';

export const useData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_API}`,
        },
      })
      .then(({ data }) => {
        return setData(data);
      });
  }, []);
  return { data, setData };
};
