export const endpoints = {
    GET_POKEMONS_LIST: () => `pokemon/`,
    GET_POKEMON_INFO: (id: string | number) => `pokemon/${id}`,
}
