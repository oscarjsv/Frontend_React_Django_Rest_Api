import axios from "axios";
import { useQuery } from "react-query";

const fetchPositions = () =>
    axios.get("http://localhost:8000/api/position-view");
  
const usePositionQuery = () => {
  return useQuery("position", fetchPositions);
};

export default usePositionQuery;
