import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Footer = () => {
    return (
        <AppBar position="static" color='inherit'>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography variant="h6">
                    {/*{title}*/}
                    {/*<Button startIcon={<MenuIcon/>} size='large' variant='text'></Button>*/}
                    {/*<IconButton size='large'>*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}
                </Typography>
                <Typography>
                    {/*<IconButtonWIthLink link={linkToGithub} iconLink={<GitHubIcon/>}/>*/}
                    {/*<IconButtonWIthLink link={linkToLinkedin} iconLink={<LinkedInIcon/>}/>*/}
                    {/*<IconButtonWIthLink link={linkToFacebook} iconLink={<FacebookOutlinedIcon/>}/>*/}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

