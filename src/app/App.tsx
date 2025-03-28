import { RouterProvider } from 'react-router'
import { router } from './router'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/lib/query-client'

import './App.css'

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <main className="background-color">
                    <ThemeProvider theme={theme}>
                        <RouterProvider router={router} />
                    </ThemeProvider>
                </main>
            </QueryClientProvider>
        </>
    )
}

export default App
