import { Box, Grid } from '@mui/material'

import { Outlet } from 'react-router'

import { MainSidebar } from '../main-sidebar'

export function MainLayout() {
    return (
        <Grid container spacing={2} columns={16}>
            <Grid size={2}>
                <MainSidebar />
            </Grid>
            <Grid size={14}>
                <Box component={'section'} sx={{ padding: '20px' }}>
                    <Outlet />
                </Box>
            </Grid>
        </Grid>
    )
}
