import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Props } from "./CircleButton.types";
import {
  CircleButtonContainer,
  StyledCircleButton,
} from "./CircleButton.styled";

const CircleButton = ({ onPress }: Props) => {
  return (
    <CircleButtonContainer>
      <StyledCircleButton onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </StyledCircleButton>
    </CircleButtonContainer>
  );
};

export default CircleButton;
