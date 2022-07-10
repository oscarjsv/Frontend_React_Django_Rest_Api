import { useState } from "react";
import { useQueryClient } from "react-query";
import Select from "react-select";
import useFetchEquipos from "../hooks/useFetchEquipos";
import { api } from "../utils/constants";

const AgregarResultado = () => {
  const [golesLocal, setgolesLocal] = useState(0);
  const [golesVisitante, setgolesVisitante] = useState(0);
  const [local, setlocal] = useState("");
  const [visitante, setvisitante] = useState("");
  const equipos = useFetchEquipos();
  const queryClient = useQueryClient();
  const golesVisitanteHandler = (e) => {
    setgolesVisitante(e.target.value);
  };
  const golesLocalHandler = (e) => {
    setgolesLocal(e.target.value);
  };

  const agregar_resultadoHandler = async () => {
    const data = {
      local: local,
      visitante: visitante,
      goles_local: golesLocal++,
      goles_visitante: golesVisitante++,
    };

    await fetch(api("tablero-view"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    queryClient.invalidateQueries("position", { exact: true });
  };
  return (
    <div className="w-full">
      <div className="flex items-center p-2">
        <p className="pr-3">Local</p>
        {equipos && (
          <Select
            options={equipos}
            onChange={(value) => {
              setlocal(value.label);
            }}
          />
        )}
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Visitante</p>
        {equipos && (
          <Select
            options={equipos}
            onChange={(value) => {
              setvisitante(value.label);
            }}
          />
        )}
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Goles Local</p>
        <input
          type="number"
          min="0"
          value={golesLocal}
          placeholder="Goles Local"
          onChange={golesLocalHandler}
        />
      </div>

      <div className="flex items-center  p-2">
        <p className="pr-3">Goles Visitante</p>
        <input
          type="text"
          min="0"
          value={golesVisitante}
          placeholder="Goles Visitante"
          onChange={golesVisitanteHandler}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={agregar_resultadoHandler}
        type="button"
      >
        Agregar Resultado
      </button>
    </div>
  );
};

export default AgregarResultado;
