import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  ButtonContainer,
  ButtonIcon,
  ButtonLabel,
  PrimaryButtonContainer,
  PrimaryButtonLabel,
  PrimaryStyledButton,
  StyledButton,
} from "./CustomButton.styled";
import { Props } from "./CustomButton.types";

const CustomButton = ({ label, theme, onPress }: Props) => {
  if (theme === "primary") {
    return (
      <PrimaryButtonContainer>
        <PrimaryStyledButton onPress={onPress}>
          <ButtonIcon name="picture-o" size={18} color="#25292e" />
          <PrimaryButtonLabel>{label}</PrimaryButtonLabel>
        </PrimaryStyledButton>
      </PrimaryButtonContainer>
    );
  }
  return (
    <ButtonContainer>
      <StyledButton onPress={onPress}>
        <ButtonLabel>{label}</ButtonLabel>
      </StyledButton>
    </ButtonContainer>
  );
};

export default CustomButton;
