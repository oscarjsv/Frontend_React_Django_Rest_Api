import { Fragment } from "react";
import usePositionQuery from "../manager/hooks/usePositionQuery";

import Table from "./table";

const TablaPosition = () => {
  const header_jugadores = ["Equipo", "Pj", "Pg", "Pp", "Goles", "Puntos"];

  const { data = [] } = usePositionQuery();
 
  return (
    <Table headerData={header_jugadores}>
      <>
        {data?.data?.map((player) => {
          return (
            <Fragment key={`${player.equipo}`}>
              <tr>
                <td className="">{player.equipo}</td>
                <td className="">{player.pj}</td>
                <td className="">{player.pg}</td>
                <td className="">{player.pp}</td>
                <td className="">{player.goles}</td>
                <td className="">{player.puntos}</td>
              </tr>
            </Fragment>
          );
        })}
      </>
    </Table>
  );
};

export default TablaPosition;
