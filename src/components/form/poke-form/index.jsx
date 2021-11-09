import React, { useContext, useState } from "react";
import { AppContext } from '../../../contexts/app/app.context'

export const PokeForm = () => {
  const {mutations:{searchPokemon}} = useContext(AppContext)
    const [pokeName, setPokeName] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (pokeName.length > 0) {
          searchPokemon(pokeName);
        }
    }

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokeName}
        onChange = { e => setPokeName(e.target.value)}
        autoComplete="off"
        placeholder="Buscar Pokemon"
      />
      <button type="submit" className="pokemon-btn" />
    </form>
  );
};
