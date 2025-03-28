import { PokemonsCard } from '@/entities/pokemon'
import { FavoritesButton } from '@/features/favorites'
import { IPokemonsCard } from '@/shared/types'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Pagination } from '@mui/material'

import { PaginationConfig } from '../types'

type PokemonCardsListProps = {
    cardsList: IPokemonsCard[]
    isFetching: boolean
    paginationConfig?: PaginationConfig
}

export function ListPagination({
    paginationConfig,
}: {
    paginationConfig: PaginationConfig
}) {
    {
        return (
            <Pagination
                page={paginationConfig.currentPage}
                count={
                    Math.ceil(
                        paginationConfig.paginationTotal /
                            paginationConfig.limit
                    ) - 1
                }
                onChange={(_, page) => paginationConfig.onChange(page)}
            />
        )
    }
}

export function PokemonCardsList({
    cardsList,
    isFetching,
    paginationConfig,
}: PokemonCardsListProps) {
    if (isFetching) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (cardsList?.length === 0) {
        return <p>The list is empty :(</p>
    }

    return (
        <Box
            component={'div'}
            sx={{ display: 'flex', flexFlow: 'column', gap: '10px' }}
        >
            <Box
                component={'div'}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}
            >
                {cardsList.map((pokemon) => {
                    return (
                        <PokemonsCard
                            key={pokemon.id}
                            addToFavoriteButton={
                                <FavoritesButton pokemonCard={pokemon} />
                            }
                            pokemon={pokemon}
                        />
                    )
                })}
            </Box>
            {paginationConfig && (
                <ListPagination paginationConfig={paginationConfig} />
            )}
        </Box>
    )
}
