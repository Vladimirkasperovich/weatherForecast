import { Button } from "@mui/material"

export type ButtonWrapperPropsType = {
    text: string
    variant: 'text' | 'contained' | 'outlined'
    disabled?: boolean
    clickHandler: () => void
}

export const ButtonWrapper = ({text, variant, disabled, clickHandler}: ButtonWrapperPropsType) => {
    
     const buttonClickHandler = () => {
        clickHandler();
     }

    return <Button variant={variant} disabled={disabled} onClick={buttonClickHandler}>{text}</Button>
}