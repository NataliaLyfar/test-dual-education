import { customAxios } from "./api";
import axios from "axios";
import { toast } from "react-toastify";

 
export const getPokemonData = async (url) => {
  try {
    const  data  = await customAxios.get(url);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};
