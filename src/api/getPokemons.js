import { customAxios } from "./api";
import { toast } from "react-toastify";


export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    const data = customAxios.get(`?limit=${limit}&offset=${offset}`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};

