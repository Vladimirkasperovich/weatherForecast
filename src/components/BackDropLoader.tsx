import React from 'react';
import {Backdrop,  CircularProgress} from "@mui/material";
import {useAppSelector} from "../hooks/useAppSelector";


export const BackDropLoader = () => {
    const isLoading = useAppSelector(state => state.loading)
    return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

