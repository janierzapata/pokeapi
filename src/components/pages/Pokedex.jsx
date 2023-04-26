import React from "react";
import { PokeRightBack, PokedexLeft } from "../containers";

export const Pokedex = () => {
  return (
    <div className="pokedex">
      <PokedexLeft />
      <div className="pokedex-right-front" />

      <div className="pokedex-right-back">
        <PokeRightBack />
      </div>
    </div>
  );
};
