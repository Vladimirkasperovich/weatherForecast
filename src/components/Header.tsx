import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {HeaderPropsType} from "types/componentsTypes/HeaderPropsType";
import {IconButtonWIthLink} from "components/IconButtonWIthLink";
import MenuIcon from '@mui/icons-material/Menu';
export const Header = ({ linkToGithub, linkToLinkedin, linkToFacebook, changeSideBarStatus}: HeaderPropsType) => {
    const handleSideBarToggle = () => {
        changeSideBarStatus()
    }

    return (
        <AppBar position="static" color='inherit'>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography variant="h6">
                    <IconButton size='large' onClick={handleSideBarToggle}>
                        <MenuIcon/>
                    </IconButton>
                </Typography>
                <Typography>
                    <IconButtonWIthLink link={linkToGithub} iconLink={<GitHubIcon/>}/>
                    <IconButtonWIthLink link={linkToLinkedin} iconLink={<LinkedInIcon/>}/>
                    <IconButtonWIthLink link={linkToFacebook} iconLink={<FacebookOutlinedIcon/>}/>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

