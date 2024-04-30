import React, {SyntheticEvent} from 'react';
import {Autocomplete, Box, Button, TextField} from "@mui/material";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { useAppSelector } from 'hooks/useAppSelector';
import { CountryType } from 'reducers/city.reducer';



type CountrySelectPropsType = {
    setCityName: (cityName: string) => void
}
export const CitySelect = ({setCityName}: CountrySelectPropsType) => {

    const citySelector = useAppSelector(state => state.city);

    
    const handleChange = (event: SyntheticEvent, value: CountryType | null) => {
        if (value) {
            setCityName(value.label.toLowerCase())
        }

    }

    return (
        <div>
            <Autocomplete
                id="country-select-demo"
                sx={{width: 300}}
                options={citySelector}
                autoHighlight
                getOptionLabel={(option) => option.label}
                onChange={handleChange}

                renderOption={(props, option) => (
                    <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        onChange={() => {
                            console.log(params)
                        }}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', 
                        }}

                    />

                )}
            />
    
        </div>


    )
}







