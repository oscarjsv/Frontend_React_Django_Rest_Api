import { useMemo } from "react";
import useFetchData from "./useFetcData";

const useFetchEquipos = () => {
  const [data] = useFetchData("team-view");
  const filterEquipos = useMemo(() => {
    return data.map((equipo) => ({
      value: equipo.nombre,
      label: equipo.nombre,
    }));
  }, [data]);

    return filterEquipos;
};
export default useFetchEquipos;
