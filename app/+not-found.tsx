import React from "react";
import styled from "styled-components/native";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <Container>
        <Button href="/">Go back Home screen!</Button>
      </Container>
    </>
  );
};

export default NotFoundScreen;

const Container = styled.View`
  flex: 1;
  background-color: #25292e;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  font-size: 20;
  text-decoration-line: underline;
  color: #fff;
`;
