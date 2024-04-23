import React, {ChangeEvent, SyntheticEvent} from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";

interface CountryType {
    code: string;
    label: string;

}

type CountrySelectPropsType = {
    setCityName: (cityName: string) => void
}
export const CountrySelect = ({setCityName}:CountrySelectPropsType) => {
    const countries: readonly CountryType[] = [
        {code: 'BY', label: 'Minsk',},
        {
            code: 'UA',
            label: 'Kiev'

        },
        {code: 'ES', label: 'Madrid'},
        {
            code: 'JP',
            label: 'Tokio',
        },

    ];
    const handleChange = (event: SyntheticEvent, value: CountryType | null) => {
        if(value){
            setCityName(value?.label.toLowerCase())
        }

    }

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{width: 300}}
            options={countries}
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
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}

                />
            )}
        />
    )
}







