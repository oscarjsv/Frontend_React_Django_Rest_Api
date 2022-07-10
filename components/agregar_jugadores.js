import { useState } from "react";
import { useQueryClient } from "react-query";
import Select from "react-select";
import useFetchEquipos from "../hooks/useFetchEquipos";
import { api } from "../utils/constants";

const AgregarJugadores = () => {
  const [equipo, setequipo] = useState("");
  const [nombre, setnombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [sueldo, setSueldo] = useState(0);
  const [tr, settr] = useState(0);
  const [ta, setTa] = useState(0);
  const [goles, setgoles] = useState(0);
  const [pj, setPj] = useState(0);
  const queryClient = useQueryClient();

  const agregar_resultadoHandler = async () => {
    const data = {
      nombre: nombre,
      equipo: equipo,
      tr: tr,
      ta: ta,
      goles: goles,
      pj: pj,
      sueldo: sueldo,
    };

    await fetch(api("player-view"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    queryClient.invalidateQueries("player", { exact: true });
  };
  const equipos = useFetchEquipos();
  return (
    <div className="w-full">
      <div className="flex items-center  p-2">
        <p className="pr-3">Nombre</p>
        <input
          type="text"
          value={nombre}
          placeholder="nombre"
          onChange={(e) => setnombre(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Edad</p>
        <input
          type="number"
          value={edad}
          placeholder="edad"
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Sueldo</p>
        <input
          type="number"
          min="0"
          value={sueldo}
          placeholder="Sueldo"
          onChange={(e) => setSueldo(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Tr</p>
        <input
          type="number"
          value={tr}
          placeholder="Nombre"
          onChange={(e) => settr(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Ta</p>
        <input
          type="number"
          value={ta}
          placeholder="Nombre"
          onChange={(e) => setTa(e.target.value)}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Goles</p>
        <input
          type="number"
          value={goles}
          placeholder="Nombre"
          onChange={(e) => setgoles(e.target.value)}
        />
      </div>
      <div className="flex items-center  p-2">
        <p className="pr-3">Pj</p>
        <input
          type="number"
          value={pj}
          placeholder="Nombre"
          onChange={(e) => setPj(e.target.value)}
        />
      </div>
      <div className="flex items-center p-2">
        <p className="pr-3">Equipo</p>
        {equipos && (
          <Select
            options={equipos}
            onChange={(value) => {
              setequipo(value.label);
            }}
          />
        )}
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

export default AgregarJugadores;
