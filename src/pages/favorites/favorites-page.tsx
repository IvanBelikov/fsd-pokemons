import { observer } from 'mobx-react-lite'

import { favoritesStore } from '@/features/favorites'
import { PokemonCardsList } from '@/widgets/pokemon-cards-list'

export const FavoritesPage = observer(() => {
    return (
        <PokemonCardsList
            cardsList={favoritesStore.favorites}
            isFetching={false}
        />
    )
})
