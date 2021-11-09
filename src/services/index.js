
import axios from'axios';
import { PokemonService } from './pokemon.services'

class ImplementService {
    constructor(){
        this.PokemonService = new PokemonService(axios);
    }
}

export const AppiService = new ImplementService();