import { Pressable } from "react-native";
import styled from "styled-components/native";

export const CircleButtonContainer = styled.View`
  width: 84px;
  height: 84px;
  margin-inline: 60px;
  border-width: 4px;
  border-color: #ffd33d;
  border-radius: 42px;
  padding: 3px;
`;

export const StyledCircleButton = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  background-color: #fff;
`;
