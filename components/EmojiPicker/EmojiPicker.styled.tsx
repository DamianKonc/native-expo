import styled from "styled-components/native";

export const StyledModalContent = styled.View`
  height: 25%;
  width: 100%;
  background-color: #25292e;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  position: absolute;
  bottom: 0;
`;

export const StyledTitleContainer = styled.View`
  height: 16%;
  background-color: #464c55;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-inline: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;
