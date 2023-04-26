import { useState } from "react";
// import { Stats } from "../../common/stats";
import { PanelAzul } from "./PanelAzul";

import "./styles.css";
import { Stats } from "../common/stats/Stats";

export const PokeRightBack = () => {
  const mockData = [
    {
      name: "GitHub",
      color: "green",
      className: "btn__garge",
    },
    {
      name: "Linkedin",
      color: "orange",
      className: "btn__garge",
    },
  ];

  const [state, setState] = useState("");

  const handlePanel = (text) => {
    handleClear();
    setState((prev) => `${prev} ${text}`);
  };

  const handleClear = () => setState("");

  return (
    <div className="pokedex-right">
      <div className="pokedex-screen-container2">
        <h1>{state}</h1>
      </div>

      <PanelAzul handlePanel={handlePanel} handleClear={handleClear} />

      <div className="pokedex-left-bottom-lights">
        <div className="light is-blue is-medium" />

        {mockData.map((item, i) => (
          <button key={i} className={` pokemon-btn-${item.color}   ${item.className}`}>
            {<Stats key={item.name} item={item} />}
          </button>
        ))}
      </div>
    </div>
  );
};
