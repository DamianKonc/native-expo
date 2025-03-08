import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const AboutScreen = () => {
  return (
    <Container>
      <CustomText>About Screen</CustomText>
    </Container>
  );
};

export default AboutScreen;

const Container = styled.View`
  flex: 1;
  background-color: #25292e;
  justify-content: center;
  align-items: center;
`;
const CustomText = styled.Text`
  color: #fff;
`;
