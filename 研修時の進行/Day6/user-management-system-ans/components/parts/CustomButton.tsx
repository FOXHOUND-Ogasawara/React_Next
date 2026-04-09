import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger" | "gradation";
  action?: () => void;
  component?: React.ElementType;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  action,
  component,
  href,
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";
  let customSx: SxProps = {};

  switch (variantType) {
    case "secondary":
      color = "secondary";
      break;
    case "danger":
      color = "error";
      break;
    case "gradation":
      color = "primary";
      customSx = {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
      };
      break;
    default:
      color = "primary";
  }

  return (
    <Button
      color={color}
      variant="contained"
      sx={{ ...customSx }}
      onClick={action}
      component={component}
      href={href}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
