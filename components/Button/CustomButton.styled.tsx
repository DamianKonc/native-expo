import styled from "styled-components/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const ButtonContainer = styled.View`
  width: 320px;
  height: 68px;
  margin-inline: 20px;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export const StyledButton = styled.Pressable`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PrimaryButtonContainer = styled(ButtonContainer)`
  border-width: 4px;
  border-color: #ffd33d;
  border-radius: 18px;
`;

export const PrimaryStyledButton = styled(StyledButton)`
  background-color: #fff;
`;

export const PrimaryButtonLabel = styled(ButtonLabel)`
  color: #25292e;
`;

export const ButtonIcon = styled(FontAwesome)`
  padding-right: 8px;
`;
