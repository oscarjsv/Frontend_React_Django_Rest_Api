import axios from "axios";
import { useQuery } from "react-query";

const fetchJugadores = () => axios.get("http://localhost:8000/api/player-view");

const useJugadoresQuery = () => {
  return useQuery("player", fetchJugadores);
};

export default useJugadoresQuery;
