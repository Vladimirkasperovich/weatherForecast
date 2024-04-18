import React from 'react';
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import {IconButtonWIthLinkPropsType} from "types/componentsTypes/IconButtonWithLinkPropsType";

export const IconButtonWIthLink = ({link, iconLink}: IconButtonWIthLinkPropsType) => {
    return (
        <IconButton size="large" color='inherit'>
            <Link to={link} style={{color: 'inherit'}}>
                {iconLink}
            </Link>
        </IconButton>
    );
};

