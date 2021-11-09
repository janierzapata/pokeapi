import React, { useContext, useState } from "react";
import PokemonImageFront from "../../../assets/front-eevee.png";
import PokemonImageBack from "../../../assets/back-eevee.png";
import { AppContext } from "../../../contexts/app/app.context";
import "./style.css";

export const Pokeimage = () => {
  const [pokeimg, setPokeimg] = useState(PokemonImageFront);
  const {
    data: { pokemon, loading },
  } = useContext(AppContext);


  if (!pokemon?.name) {
    return <h1>Ingrese un pokemon valido</h1>;
  }
  
  const validacion = (estado)=>{
    while (true) {
      
      if(estado){
        setTimeout(() => {
          setPokeimg(PokemonImageBack);
        }, 3000)
      }else{
        setPokeimg(PokemonImageFront);
      }
      estado=false;
    }
  }

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <img
          className="pokeimg"
          src={pokeimg}
          pokemon={pokemon}
          /**/

          onMouseEnter={() =>{
            validacion(true)
          }}
          onMouseLeave ={
            validacion(false)
          }
          
        />
      )}
    </div>
  );
};
