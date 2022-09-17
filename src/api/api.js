import axios from "axios";
import { initialURL } from "constants";

export const customAxios = axios.create({
  baseURL: initialURL,
});

