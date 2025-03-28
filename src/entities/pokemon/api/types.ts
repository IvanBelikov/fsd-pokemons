type PokemonDTO = {
    name: string
    url: string
}

export type PokemonListDTO = {
    count: number
    results: PokemonDTO[]
}

export type PokemonInfoDTO = {
    id: number
    name: string
    base_experience: number
    height: number
    sprites: {
        front_default: string
    }
}
