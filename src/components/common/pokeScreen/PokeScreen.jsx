import { useContext } from "react";

import "./styles.css";
import { Stats } from "../stats/Stats";
import { AppContext } from "../../../context/app/app.context";
import { PokeImage } from "./PokeImage";

const mockData = [
  {
    name: "HP",
    base_stat: 30,
  },
  {
    name: "attack",
    base_stat: 60,
  },
  {
    name: "defence",
    base_stat: 50,
  },
  {
    name: "special-attack",
    base_stat: 70,
  },
  {
    name: "special-defence",
    base_stat: 72,
  },
  {
    name: "speed",
    base_stat: 78,
  },
];

export const PokeScreen = () => {
  const {
    data: { pokemon, error, loading },
  } = useContext(AppContext);

  console.log('pokemon ==>',pokemon.sprites
  );

  

  if (!pokemon.name) {
    return <h1>Ingrese un pokemon valido</h1>;
  }
  return (
    <div className="pokedex-screen ">
      {error ? (
        <h1> Ingrese un pokemon valido</h1>
      ) : loading ? (
        setTimeout(() => {
          <h1>Loading...</h1>;
        }, 3000)
      ) : (
        <>
          <PokeImage images={pokemon.sprites} />
          <div className="pokemon-info contenedor ">
            <h2 className="pokemon-name"> {pokemon.name} </h2>
            <ul>
              {pokemon.stats.map((item, i) => (
                <Stats key={i} item={item} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
