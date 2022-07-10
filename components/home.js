import AgregarEquipo from "./agregar_equipo";
import AgregarJugadores from "./agregar_jugadores";
import AgregarResultado from "./agregar_resultado";
import TablaEquipo from "./tabla_equipo";
import TablaJugadores from "./tabla_jugadores";
import TablaPosition from "./tabla_position";

const Home = () => {
  return (
    <div className="flex items-center flex-col justify-center p-10">
      <h1>Jugadores</h1>
      <TablaJugadores />
      <h1>Equipo</h1>
      <TablaEquipo />
      <h1>Position</h1>
      <TablaPosition />

      <AgregarResultado />
      <AgregarEquipo />
      <AgregarJugadores />
      <div>
        <div className="flex">
          <p>tr:</p>
          <p>tarjeta roja</p>
        </div>
        <div className="flex">
          <p>tr:</p>
          <p>tarjeta roja</p>
        </div>
        <div className="flex">
          <p>tr:</p>
          <p>tarjeta roja</p>
        </div>
        <div className="flex">
          <p>tr:ç</p>
          <p>tarjeta roja</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
