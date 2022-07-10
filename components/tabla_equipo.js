import { Fragment } from "react";
import useEquipoQuery from "../manager/hooks/useEquipoQuery";

import Table from "./table";

const TablaEquipo = () => {
  const header_jugadores = [
    "Id",
    "Nombre",
    "Ciudad",
    "Num_Jugadores",
    "Division",
  ];

  const { data = [] } = useEquipoQuery();
  return (
    <Table headerData={header_jugadores}>
      <>
        {data?.data?.map((player) => {
          return (
            <Fragment key={`${player.id}`}>
              <tr>
                <td className="">{player.id}</td>
                <td className="">{player.nombre}</td>
                <td className="">{player.ciudad}</td>
                <td className="">{player.num_jugadores}</td>
                <td className="">{player.division}</td>
              </tr>
            </Fragment>
          );
        })}
      </>
    </Table>
  );
};

export default TablaEquipo;
