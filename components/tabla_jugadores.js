import { Fragment } from "react";
import useJugadoresQuery from "../manager/hooks/usePlayerQuery";

import Table from "./table";

const TablaJugadores = () => {
  const header_jugadores = [
    "Id",
    "Nombre",
    "Equipo",
    "Tr",
    "Ta",
    "Goles",
    "Pj",
    "Sueldo",
  ];

  const { data = [] } = useJugadoresQuery();
  return (
    <Table headerData={header_jugadores}>
      <>
        {data?.data?.map((player) => {
          return (
            <Fragment key={`${player.id}`}>
              <tr>
                <td className="">{player.id}</td>
                <td className="">{player.nombre}</td>
                <td className="">{player.equipo}</td>
                <td className="">{player.tr}</td>
                <td className="">{player.ta}</td>
                <td className="">{player.goles}</td>
                <td className="">{player.pj}</td>
                <td className="">{player.sueldo}</td>
              </tr>
            </Fragment>
          );
        })}
      </>
    </Table>
  );
};

export default TablaJugadores;
