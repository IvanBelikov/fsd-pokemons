import { httpClient } from '@/shared/api'
import { endpoints } from '@/shared/api/endpoints'

import { PokemonListDTO, PokemonInfoDTO } from './types'

export const pokemonsApi = {
    fetchPokemonsList: (
        limit?: number,
        offset?: number,
        signal?: AbortSignal
    ) => {
        return httpClient
            .get<PokemonListDTO>(endpoints.GET_POKEMONS_LIST(), {
                params: {
                    limit,
                    offset,
                },
                signal,
            })
            .then((response) => response.data)
    },

    fetchPokemonInfo(pokemonId: number | string, signal?: AbortSignal) {
        return httpClient
            .get<PokemonInfoDTO>(endpoints.GET_POKEMON_INFO(pokemonId), {
                signal,
            })
            .then((response) => response.data)
    },
}
