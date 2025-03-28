import { IPokemonsCard } from '../types'

export class StorageService {
    static setFavorites(favoritesList: IPokemonsCard[]) {
        localStorage.setItem('favorites', JSON.stringify(favoritesList))
    }

    static getFavorites(): IPokemonsCard[] {
        return JSON.parse(localStorage.getItem('favorites') as string)
    }
}
