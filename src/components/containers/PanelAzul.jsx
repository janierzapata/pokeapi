import { BotonAzul } from "./BotonAzul";
import "./styles.css";

export const PanelAzul = ({ handlePanel, handleClear }) => {
  return (
    <div className="pokedex-screen-container3">
      <BotonAzul action={handlePanel} textAction={"mapa de regiones"} text={"region"} />
      <BotonAzul action={handlePanel} textAction={"evoluciones"} text={"evol"} />
      <BotonAzul action={handlePanel} textAction={"escanear pokemon"} text={"scan"} />
      <BotonAzul action={handlePanel} textAction={"medallas obtenidas"} text={"medlls"} />
      <BotonAzul action={handlePanel} textAction={"gimnasios"} text={"gyms"} />
     
      <BotonAzul action={handlePanel} textAction={"tiendas"} text={"shops"} />
      <BotonAzul action={handlePanel} textAction={"hospitales"} text={"hosp"} />
      <BotonAzul action={handlePanel} textAction={"cualquier chimbada"} text={"otros"} />
      <BotonAzul github={true} action={handlePanel} textAction={"GitHub ergwer99"} text={"GitHub"} />
      <BotonAzul github={true} action={handleClear}  text={"GitHub"} />
    </div>
  );
};
