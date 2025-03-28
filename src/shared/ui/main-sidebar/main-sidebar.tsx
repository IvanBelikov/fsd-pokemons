import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import { categories } from './config/categories'
import { useNavigate } from 'react-router'

export function MainSidebar() {
    const navigate = useNavigate()

    return (
        <Drawer
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    position: 'unset',
                    boxSizing: 'border-box',
                    height: '100vh',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Divider />
            <List>
                {categories.map((category) => (
                    <ListItem key={category.path} disablePadding>
                        <ListItemButton onClick={() => navigate(category.path)}>
                            <ListItemText primary={category.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
