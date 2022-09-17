import {customAxios} from "./api";
import { toast } from "react-toastify";

  
export const getPokemonBySearch = async (pokemon) => {
  try {
    const data = await customAxios.get(`/${pokemon}`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};
