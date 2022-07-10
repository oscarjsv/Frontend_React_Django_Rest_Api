import { useState } from "react";
import { useQueryClient } from "react-query";
import Select from "react-select";
import useFetchEquipos from "../hooks/useFetchEquipos";
import { api } from "../utils/constants";

const AgregarEquipo = () => {
  const [ciudad, setciudad] = useState("");
  const [nombre, setnombre] = useState("");
  const [division, setdivision] = useState("");
  const [numeroJugadores, setnumeroJugadores] = useState(0);
  const queryClient = useQueryClient();

  const agregar_resultadoHandler = async () => {
    const data = {
      nombre: nombre,
      ciudad: ciudad,
      num_jugadores: numeroJugadores,
      division: division,
    };

    await fetch(api("team-view"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    queryClient.invalidateQueries("equipo", { exact: true });
  };
  return (
    <div className="w-full">
      <div className="flex items-center  p-2">
        <p className="pr-3">Ciudad</p>
        <input
          type="text"
          value={ciudad}
          placeholder="ciudad"
          onChange={(e) => setciudad(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Division</p>
        <input
          type="text"
          value={division}
          placeholder="Division"
          onChange={(e) => setdivision(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Numero jugadores</p>
        <input
          type="text"
          min="0"
          value={numeroJugadores}
          placeholder="Goles Local"
          onChange={(e) => setnumeroJugadores(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Nombre</p>
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={(e) => setnombre(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={agregar_resultadoHandler}
        type="button"
      >
        Enviar
      </button>
    </div>
  );
};

export default AgregarEquipo;
