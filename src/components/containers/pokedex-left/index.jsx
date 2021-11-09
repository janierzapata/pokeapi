import React from "react";
import { PokeScreen } from "../../common/poke-screen";
import { Stats } from "../../common/stats";
import { PokeForm } from "../../form/poke-form";

export const PokedexLeft = () => {

  const mockData = [
    {
      
      color: "green",
      className: "janier",
    },
    {
      
      color: "orange",
      className: "porky",
    },
  ];
  
  return (
    <div className="pokedex-left">
      <div className="pokedex-left-top">
        <div className="light is-sky is-big" />
        <div className="light is-red" />
        <div className="light is-yellow" />
        <div className="light is-green" />
      </div>
      <div className="pokedex-screen-container">
        <PokeScreen />
      </div>
      <div className="pokedex-left-bottom">
        <div className="pokedex-left-bottom-lights">
          
          <div className="pokedex-left-bottom-lights">
        <div className="light is-blue is-medium" />
        
        {mockData.map((item) => (
          <button className={` pokemon-btn-${item.color}   ${item.className}`}>
            {<Stats item={item} />}
          </button>
        ))}
      </div>
        </div>
        <PokeForm />
      </div>
    </div>
  );
};
