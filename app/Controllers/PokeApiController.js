import { ProxyState } from "../AppState.js"
import { pokeApiService } from "../Services/PokeApiService.js"

function _draw() {
    let template = ""
    ProxyState.apiPoke.forEach(p => {
        template += `<li class="action hover-action" onclick="app.pokeApiController.getPokemon('${p.name}')"> ${p.name}</li>`
    })
    let pokeElem = document.getElementById('apiPoke')
    pokeElem.innerHTML = template
}

function _drawActive() {
    let activePokemonElem = document.getElementById('activePokemon')
    activePokemonElem.innerHTML = ProxyState.activePokemon ? ProxyState.activePokemon.Template : "<p> no active pokemon</p>"
}

//public
export default class PokeApiController {
    constructor() {
        ProxyState.on('apiPoke', _draw)
        ProxyState.on('activePokemon', _drawActive)

        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokeApiService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    async getPokemon(name) {
        try {
            await pokeApiService.getPokemon(name)
        } catch (error) {
            console.error(error)
        }
    }
}