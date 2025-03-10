import React from "react";
import { Props } from "./IconButton.types";
import { StyledIconButton, StyledIconButtonLabel } from "./IconButton.styled";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = ({ icon, label, onPress }: Props) => {
  return (
    <StyledIconButton onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <StyledIconButtonLabel>{label}</StyledIconButtonLabel>
    </StyledIconButton>
  );
};

export default IconButton;
