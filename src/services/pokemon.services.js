export class PokemonService {

    constructor(client) {
        this.client = client;
    }

    getPokemon = async (value) => {
        try {
            const { data } = await this.client.get(`${value}`)
            return data;
        } catch (error) {
            throw error;
        }
    }
}