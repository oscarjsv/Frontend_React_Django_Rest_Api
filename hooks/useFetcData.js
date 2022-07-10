import { useEffect, useState } from "react";
import { api } from "../utils/constants";

const useFetchData = (endpoint) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const apiPlayer = api(endpoint);
    const fetchEquipo = async () => {
      const response = await fetch(apiPlayer);
      const data = await response.json();
     
      setdata(data);
    };
    fetchEquipo();
  }, [endpoint]);

  return [data];
};
export default useFetchData;