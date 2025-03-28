import { PokemonCardsList } from '@/widgets/pokemon-cards-list'
import { usePokemonsList } from '@/entities/pokemon'
import { extractId } from '@/shared/lib/utils/extract-id'

import { Box } from '@mui/material'

import { useSearchParams } from 'react-router'

import { pagintaionLimit } from './config'

export function PokemonsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page')) || 1
    const offset = pagintaionLimit * page

    const { data, isFetching } = usePokemonsList(pagintaionLimit, offset)

    const cardsList = data?.results.map((cardDTO) => ({
        ...cardDTO,
        id: extractId(cardDTO.url) || 0,
    }))

    return (
        <Box component={'div'}>
            {data && cardsList && (
                <PokemonCardsList
                    cardsList={cardsList}
                    isFetching={isFetching}
                    paginationConfig={{
                        limit: 20,
                        currentPage: page,
                        paginationTotal: data.count,
                        onChange: (newPage: number) =>
                            setSearchParams({ page: String(newPage) }),
                    }}
                />
            )}
        </Box>
    )
}
