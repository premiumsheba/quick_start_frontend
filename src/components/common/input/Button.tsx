import React from "react";
import { Button as MUIButton } from "@mui/material";
import CustomButtonPropsType from "@/types/common/input/Button";

export const Button: React.FC<CustomButtonPropsType> = ({
  style,
  p,
  pt,
  pb,
  pr,
  pl,
  m,
  mt,
  mb,
  ml,
  mr,
  s,
  cl,
  type,
  ...rest
}) => {
  const buttonStyle: React.CSSProperties = {
    padding: p,
    paddingTop: pt,
    paddingBottom: pb,
    paddingRight: pr,
    paddingLeft: pl,
    margin: m,
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    ...style, // if needed in future
  };

  return (
    <MUIButton style={buttonStyle} size={s} color={cl} variant={type} {...rest}>
      {rest.children}
    </MUIButton>
  );
};
