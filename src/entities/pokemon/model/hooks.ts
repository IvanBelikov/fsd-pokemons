import { useQuery } from '@tanstack/react-query'
import { pokemonsApi } from '../api'

export const usePokemonsList = (limit = 0, offset = 20) => {
    return useQuery({
        queryKey: ['pokemon-list', `${offset}`],
        queryFn: ({ signal }) =>
            pokemonsApi.fetchPokemonsList(limit, offset, signal),
        staleTime: 60 * 60 * 1000,
    })
}

export const usePokemonInfo = (id: number) => {
    return useQuery({
        queryKey: ['pokemon-info', id],
        queryFn: ({ signal }) => pokemonsApi.fetchPokemonInfo(id, signal),
        staleTime: 60 * 60 * 1000,
    })
}
