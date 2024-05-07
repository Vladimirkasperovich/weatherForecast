import { TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"



export type InputWrapperPropsType = {
    label: string
    variant: 'filled' | 'outlined' | 'standard'
    getFieldProps? :any
}

export const InputWrapper = ({label, variant, getFieldProps}: InputWrapperPropsType) => {
    const [inputValue, setInputValue] = useState('');

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          const targetValue = event.target.value;
          setInputValue(targetValue);
          
    }

    return <TextField  label={label} variant={variant} onChange={onchangeHandler} value={inputValue} {...getFieldProps}/>
    
}