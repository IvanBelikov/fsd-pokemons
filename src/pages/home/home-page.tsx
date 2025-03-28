import { useNavigate } from 'react-router'

import { Box, Button } from '@mui/material'

import { routes } from '@/shared/constants'

export function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <h1>This is the pokemon app</h1>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    variant="contained"
                    onClick={() => navigate(routes.POKEMONS.path)}
                >
                    Pokemons
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate(routes.FAVORITES.path)}
                >
                    Favorites
                </Button>
            </Box>
        </>
    )
}
