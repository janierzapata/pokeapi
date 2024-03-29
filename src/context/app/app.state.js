import { useState } from "react";
import { AppiService } from "../../services";


export const useStateContainer = (initialState={}) => {
    const { getPokemon } = AppiService();
    const [pokemon, setPokemon] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)


     const searchPokemon = async (value) => {
        try {
          setLoading((prev) => !prev);
          const data = await getPokemon(value);
          setPokemon(data);
          setError(false)
        } catch (error) {
          setError(true);
        } finally {
          setLoading((prev) => !prev);
        }
      };

    return {
        data: { pokemon, loading, error },
        mutations: {
          searchPokemon:( pokemon )=>searchPokemon(pokemon),
        },
      };
}
