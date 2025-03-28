import { createBrowserRouter } from 'react-router'

import { routes } from '@/shared/constants'
import { MainLayout } from '@/shared/ui/main-layout'

import { HomePage } from '@/pages/home'
import { PokemonsPage } from '@/pages/pokemons'
import { PokemonInfoPage } from '@/pages/pokemon-info'
import { FavoritesPage } from '@/pages/favorites'

export const router = createBrowserRouter([
    {
        path: routes.HOME.path,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: routes.POKEMONS.path,
                element: <PokemonsPage />,
            },

            {
                path: routes.POKEMONS_INFO.path,
                element: <PokemonInfoPage />,
            },

            {
                path: routes.FAVORITES.path,
                element: <FavoritesPage />,
            },
        ],
    },
])
