import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"


class PokeApiService {
    async getPokemon(name) {
        let res = await pokeApi.get(name)
        console.log(res.data)
        ProxyState.activePokemon = new Pokemon(res.data)
    }

    async getAllPokemon() {
        let res = await pokeApi.get()
        ProxyState.apiPoke = res.data.results
    }
}

export const pokeApiService = new PokeApiService()