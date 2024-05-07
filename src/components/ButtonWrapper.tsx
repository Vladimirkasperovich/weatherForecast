import { Button } from "@mui/material";

export type ButtonWrapperPropsType = {
  text: string;
  variant: "text" | "contained" | "outlined";
  disabled?: boolean;
  clickHandler?: () => void;
  type?: "submit";
};

export const ButtonWrapper = ({
  text,
  variant,
  disabled,
  clickHandler,
  type,
}: ButtonWrapperPropsType) => {
  const buttonClickHandler = () => {
    clickHandler?.();
  };

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={buttonClickHandler}
      type={type}
    >
      {text}
    </Button>
  );
};
