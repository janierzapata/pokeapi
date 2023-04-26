import axios from "axios";

export const AppiService = () => {
  
  const getPokemon = async (id) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getPokemon,
  };
};
