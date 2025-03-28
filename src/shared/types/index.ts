export type IPokemonsCard = {
    id: number
    name: string
    url?: string
}

export type IPokemonInfo = {
    id: number
    name: string
    base_experience: number
    height: number
    sprites: {
        front_default: string
    }
}
