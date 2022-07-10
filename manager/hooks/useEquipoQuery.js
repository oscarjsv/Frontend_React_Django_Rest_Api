
import axios from "axios";
import { useQuery } from "react-query";

const fetchEquipo = () =>
    axios.get("http://localhost:8000/api/team-view");
  
const useEquipoQuery = () => {
  return useQuery("equipo", fetchEquipo);
};

export default useEquipoQuery;
