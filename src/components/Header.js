import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <IconButton  edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography class="title" variant="title" color="inherit">
                        My Music App
                    </Typography>
                    <IconButton 
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        
                        <AccountCircle />
                    </IconButton>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default Header;