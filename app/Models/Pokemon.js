export default class Pokemon {
    constructor({ name, img, weight, height, types, sprites }) {
        //this.id = id
        this.name = name
        this.img = img || sprites.other['official-artwork'].front_default
        this.weight = weight
        this.height = height
        this.types = types
    }
    //watch out for img coming up as null

    get Template() {
        return `
        <div>
            <h1> ${this.name}
           <img src="${this.img}"</img>
            </h1>
            <hr>
            <h4>Weight:${this.weight} | Height:${this.height} | Types:${this.types}
        </div>
        ${this.Button}
        `
    }
    get Button() {
        if (this.name) {
            return '<button class="btn btn-outline-dark" onclick="app.myPokemonController.add()">Add</button>'
        }
        return '<button class="btn btn-outline-dark" onclick="app.myPokemonController.remove()">Remove</button>'

    }
}
