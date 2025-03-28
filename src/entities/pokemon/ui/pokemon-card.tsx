import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { ReactNode } from 'react'
import { useNavigate } from 'react-router'

import { IPokemonsCard } from '@/shared/types'
import { routes } from '@/shared/constants'

type PokemonsCardProps = {
    addToFavoriteButton: ReactNode
    pokemon: IPokemonsCard
}

export function PokemonsCard({
    addToFavoriteButton,
    pokemon,
}: PokemonsCardProps) {
    const navigate = useNavigate()

    return (
        <Card sx={{ width: 275, backgroundColor: '#303030' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {pokemon.name}
                </Typography>
                <Button
                    size="small"
                    onClick={() =>
                        navigate(`${routes.POKEMONS.path}/${pokemon.id}`)
                    }
                >
                    Learn More
                </Button>
            </CardContent>
            <CardActions>{addToFavoriteButton}</CardActions>
        </Card>
    )
}
