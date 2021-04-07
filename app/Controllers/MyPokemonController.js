import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/myPokemonService.js";

//Private
function _draw() {
    let myPokemon = ProxyState.myPokemon
    let template = ''
    myPokemon.forEach(mP => {
        template += `<li class ="action hover-action" onclick="app.myPokemonController.setActive('${mP.name}')">${mP.name}</li>`
    })


    let myPokemonElem = document.getElementById("myPokemon")
    myPokemonElem.innerHTML = template


}

//Public
export default class MyPokemonController {
    constructor() {
        ProxyState.on("myPokemon", _draw);



        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await myPokemonService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }
    async add() {
        try {
            await myPokemonService.add()
        } catch (error) {
            console.error(error)
        }
    }
    async remove() {
        try {
            await myPokemonService.remove()
        } catch (error) {
            console.error(error)
        }
    }
    setActive(name) {
        myPokemonService.setActive(name)
    }
}
