import React from 'react';
import { IconButton, Toolbar, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {HeaderPropsType} from "types/componentsTypes/HeaderPropsType";
import {IconButtonWIthLink} from "components/IconButtonWIthLink";
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
export const Header = ({handleDrawerOpen, open}: HeaderPropsType) => {
    return (
        <AppBar position="fixed" open={open} color='primary'>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Typography>
                <Typography>
                    <IconButtonWIthLink link={'https://github.com/Vladimirkasperovich'} iconLink={<GitHubIcon/>}/>
                    <IconButtonWIthLink link={'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/'}
                                        iconLink={<LinkedInIcon/>}/>
                    <IconButtonWIthLink link={'https://www.facebook.com/vladimir.kasperovich.7'}
                                        iconLink={<FacebookOutlinedIcon/>}/>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

