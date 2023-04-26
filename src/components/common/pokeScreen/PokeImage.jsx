import { useContext, useState } from "react";
import { AppContext } from "../../../context/app/app.context";
import "./styles.css";
export const PokeImage = ({ images }) => {

  const {back_default, front_default } = images; 
  const [pokeimg, setPokeimg] = useState(front_default);
  const { data } = useContext(AppContext);

  const validacion = (estado) => {
    estado ? setPokeimg(back_default) : setPokeimg(front_default);
  };

  return (
    <>
      {data.loading ? (
        "Loading..."
      ) : (
        <img
          className="pokeimg"
          src={pokeimg}
          
          /**/

          onMouseEnter={() => {
            validacion(true);
          }}
          onMouseLeave={() => validacion(false)}
        />
      )}
    </>
  );
};
