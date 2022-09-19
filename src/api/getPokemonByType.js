import axios from 'axios';
import { toast } from 'react-toastify';

export const getPokemonByType = async pokemon => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${pokemon}`
    );
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};
