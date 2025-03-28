import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { observer } from 'mobx-react-lite'

import { IPokemonsCard } from '@/shared/types'

import { favoritesStore } from '../model/favorites-store'

type FavoritesButtonProps = {
    pokemonCard: IPokemonsCard
}

const FilledButton = ({ callback }: { callback: () => void }) => {
    return (
        <IconButton aria-label="add to favorites" onClick={callback}>
            <FavoriteIcon color="error" />
        </IconButton>
    )
}

const OutlinedButton = ({ callback }: { callback: () => void }) => {
    return (
        <IconButton aria-label="add to favorites" onClick={callback}>
            <FavoriteBorderIcon />
        </IconButton>
    )
}

export const FavoritesButton = observer(
    ({ pokemonCard }: FavoritesButtonProps) => {
        const isFavorite = favoritesStore.favorites.some(
            (pokemon) => pokemon.id === pokemonCard.id
        )

        return (
            <>
                {isFavorite ? (
                    <FilledButton
                        callback={() =>
                            favoritesStore.deleteFromFavorites(pokemonCard.id)
                        }
                    />
                ) : (
                    <OutlinedButton
                        callback={() =>
                            favoritesStore.addToFavorites(pokemonCard)
                        }
                    />
                )}
            </>
        )
    }
)
