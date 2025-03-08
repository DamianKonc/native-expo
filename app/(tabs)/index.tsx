import styled from "styled-components/native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomText>Edit app/index.tsx to edit this screen.</CustomText>
      <Button href={"/about"}>Go to about screen</Button>
    </Container>
  );
}

const Container = styled.View`
  background-color: #25292e;
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  color: #fff;
`;

const Button = styled(Link)`
  font-size: 20px;
  text-decoration-line: underline;
  color: #fff;
`;
