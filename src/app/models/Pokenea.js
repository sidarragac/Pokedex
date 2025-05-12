class Pokenea {
    #id // int, unique identifier
    #name // string, name of the Pokenea
    #height // int, height of the Pokenea
    #ability // string, ability of the Pokenea
    #imageUrl // string, URL of the image of the Pokenea
    #phrase // string, phrase of the Pokenea

    constructor(id, name, height, ability, imageFileName, phrase) {
        this.#id = id
        this.#name = name
        this.#height = height
        this.#ability = ability
        this.#imageUrl = imageFileName
        this.#phrase = phrase
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get height() {
        return this.#height
    }

    get ability() {
        return this.#ability
    }

    get imageUrl() {
        return this.#imageUrl
    }

    get phrase() {
        return this.#phrase
    }

    set id(id) {
        this.#id = id
    }

    set name(name) {
        this.#name = name
    }

    set height(height) {
        this.#height = height
    }

    set ability(ability) {
        this.#ability = ability
    }

    set imageUrl(imageUrl) {
        this.#imageUrl = imageUrl
    }

    set phrase(phrase) {
        this.#phrase = phrase
    }
}