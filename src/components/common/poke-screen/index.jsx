import React, { useContext } from "react";

import "./style.css";
import { Stats } from "../stats";
import { AppContext } from "../../../contexts/app/app.context";
import { Pokeimage } from "./pokeimage";
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

  if (!pokemon.name) {
    return <h1>Ingrese un pokemon valido</h1>;
  }

  return (
    <div className="pokedex-screen ">
      {/* <div>

          <Pokeimage />
        </div> */}
      {error ? (
        <h1> Ingrese un pokemon valido</h1>
      ) : loading ? (
        setTimeout(() => {
          <h1>Loading...</h1>
        }, 3000)
      ) : (
        <div className="pokemon-info contenedor ">
          <h2 className="pokemon-name"> {pokemon.name} </h2>
          <ul>
            {pokemon.stats.map((item) => (
              <Stats key={item.name} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
