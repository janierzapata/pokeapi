import axios from "axios";
import { URL_POKE } from "./constants"

export const applyInterceptor = () =>{
    axios.defaults.baseURL = URL_POKE;
}