import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {CitySelectSection} from "components/citySelectSection/CitySelectSection";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useState} from "react";
import {WeatherDisplaySection} from "components/weatherDisplaySection/WeatherDisplaySection";
import {TransitionsModal} from "components/TransitionsModal";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {IconButtonWIthLink} from "components/IconButtonWIthLink";
import {Header} from "components/Header";
import {SideBarHeader} from "components/sideBar/SideBarHeader";
import {SideBar} from "components/sideBar/SideBar";


const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));


export default function PersistentDrawerLeft() {

    const [open, setOpen] = React.useState(false);
    const {setWeatherData} = useAppDispatch();
    const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
    const [isOpenTransitionsModal, setIsOpenTransitionsSideBar] = useState<boolean>(false);
    const setCityName = (cityName: string) => {
        setWeatherData(cityName);
    }

    const toggleSideBar = () => {
        setIsOpenSideBar((prevState) => !prevState)
    }

    const toggleTransitionsModal = () => {
        setIsOpenTransitionsSideBar((prevState) => !prevState);
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
            <SideBar open={open}/>
            <Main open={open}>
                <SideBarHeader/>
                <CitySelectSection setCityName={setCityName}/>
                <WeatherDisplaySection toggleTransitionsModal={toggleTransitionsModal} toggleSideBar={toggleSideBar}
                                       isOpenSideBar={isOpenSideBar}/>
                <TransitionsModal toggleTransitionsModal={toggleTransitionsModal}
                                  isOpenTransitionsModal={isOpenTransitionsModal}
                />
            </Main>
        </Box>
    );
}
