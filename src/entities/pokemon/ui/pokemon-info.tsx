import { Box, Typography } from '@mui/material'

import { IPokemonInfo } from '@/shared/types'

import { ReactNode } from 'react'

type PokemonInfoProps = {
    addToFavoritesButton: ReactNode
    pokemonInfo: IPokemonInfo
}

export function PokemonInfo({
    pokemonInfo,
    addToFavoritesButton,
}: PokemonInfoProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <Box>
                <img
                    src={pokemonInfo.sprites.front_default}
                    alt={pokemonInfo.name}
                />
            </Box>
            <Box>
                {addToFavoritesButton}
                <Typography variant="h2">{pokemonInfo.name}</Typography>
                <Typography component={'p'}>
                    Experience: {pokemonInfo.base_experience} exp
                </Typography>
                <Typography component={'p'}>
                    Height: {pokemonInfo.height} cm
                </Typography>
            </Box>
        </Box>
    )
}
