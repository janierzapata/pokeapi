import React, { useState } from "react";
import { Stats } from "../../common/stats";
import { PanelAzul } from "./panelAzul";

import "./style.css";

export const PokeRightBack = () => {
  const mockData = [
    {
      name: "ergwer99",
      color: "green",
      className: "janier",
    },
    {
      name: "porky",
      color: "orange",
      className: "porky",
    },
  ];
  
  const [state, setState] = useState('')
  
  const handlePanel = (text) =>{
    handleClear();
    setState(prev=>`${prev} ${text}`)
  }

  const handleClear=()=>setState('')

  return (
    <div className="pokedex-right">
      <div className="pokedex-screen-container2" >
        <h1>
          {state}
        </h1>
      </div>
    
      <PanelAzul handlePanel={handlePanel} handleClear={handleClear}/>

      <div className="pokedex-left-bottom-lights">
        <div className="light is-blue is-medium" />
        
        {mockData.map((item) => (
          <button className={` pokemon-btn-${item.color}   ${item.className}`}>
            {<Stats key={item.name} item={item} />}
          </button>
        ))}
      </div>
    </div>
  );
};
