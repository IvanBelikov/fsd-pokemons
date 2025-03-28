import { makeAutoObservable } from 'mobx'

import { StorageService } from '@/shared/lib/storage-service'

import { IPokemonsCard } from '@/shared/types'

class FavoritesStore {
    favorites: IPokemonsCard[]

    constructor() {
        makeAutoObservable(this)

        this.favorites = StorageService.getFavorites() || []
    }

    addToFavorites(pokemonsCard: IPokemonsCard) {
        this.favorites = [...this.favorites, pokemonsCard]
        StorageService.setFavorites(this.favorites)
    }

    deleteFromFavorites(pokemonsCardId: number) {
        this.favorites = this.favorites.filter(
            (card) => card.id !== pokemonsCardId
        )
        StorageService.setFavorites(this.favorites)
    }
}

export const favoritesStore = new FavoritesStore()
