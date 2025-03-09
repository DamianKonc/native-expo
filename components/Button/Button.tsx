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
} from "./Button.styled";
import { Props } from "./Button.types";

const CustomButton = ({ label, theme }: Props) => {
  if (theme === "primary") {
    return (
      <PrimaryButtonContainer>
        <PrimaryStyledButton onPress={() => alert("You pressed a button")}>
          <ButtonIcon name="picture-o" size={18} color="#25292e" />
          <PrimaryButtonLabel>{label}</PrimaryButtonLabel>
        </PrimaryStyledButton>
      </PrimaryButtonContainer>
    );
  }
  return (
    <ButtonContainer>
      <StyledButton>
        <ButtonLabel>{label}</ButtonLabel>
      </StyledButton>
    </ButtonContainer>
  );
};

export default CustomButton;
