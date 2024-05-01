import { TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"



export type InputWrapperPropsType = {
    label: string
    variant: 'filled' | 'outlined' | 'standard'
    onInputChange: (value: string) => void
}

export const InputWrapper = ({label, variant, onInputChange}: InputWrapperPropsType) => {
    const [inputValue, setInputValue] = useState('');

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          const targetValue = event.target.value;
          setInputValue(targetValue);
          onInputChange(targetValue);
    }

    return <TextField  label={label} variant={variant} onChange={onchangeHandler} value={inputValue}/>
    
}