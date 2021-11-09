import axios from "axios";
import { URL_POKE } from "./constant"

export const applyInterceptor = () =>{
    axios.defaults.baseURL = URL_POKE;
}