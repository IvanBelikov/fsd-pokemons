import { PokemonInfo, usePokemonInfo } from '@/entities/pokemon'
import { FavoritesButton } from '@/features/favorites'

import { Box, CircularProgress } from '@mui/material'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useNavigate, useParams } from 'react-router'

export function PokemonInfoPage() {
    const { pokemonId } = useParams()
    const navigate = useNavigate()

    if (!pokemonId) {
        return <h1>Error</h1>
    }

    const { data, isFetching } = usePokemonInfo(parseInt(pokemonId))

    if (isFetching) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (data) {
        const pokemonCard = { id: data.id, name: data.name }

        return (
            <>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </IconButton>
                <PokemonInfo
                    addToFavoritesButton={
                        <FavoritesButton pokemonCard={pokemonCard} />
                    }
                    pokemonInfo={data}
                />
            </>
        )
    }
}
