import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {
    async add() {
        let res = await sandboxApi.post('', ProxyState.activePokemon)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    }
    async getAllPokemon() {
        let res = await sandboxApi.get('')
        ProxyState.myPokemon = res.data.map(mP => new Pokemon(mP))
    }
    async remove() {
        await sandboxApi.delete(ProxyState.activePokemon.name)

        ProxyState.myPokemon = ProxyState.myPokemon.filter(mP => mP.name !== ProxyState.activePokemon.name)

        ProxyState.activePokemon = null
    }

    setActive(name) {
        let pokemon = ProxyState.myPokemon.find(mP => mP.name === name)
        ProxyState.activePokemon = pokemon
    }
}

export const myPokemonService = new MyPokemonService();