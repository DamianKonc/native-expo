import styled from "styled-components/native";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer.tsx/ImageViewer";
import CustomButton from "@/components/Button/Button";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <Container>
      <ImageContainer>
        <ImageViewer imgSource={PlaceholderImage} />
      </ImageContainer>
      <FooterContainer>
        <CustomButton label="Choose a photo" theme="primary" />
        <CustomButton label="Use this photo" />
      </FooterContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #25292e;
  align-items: center;
`;

const ImageContainer = styled.View`
  flex: 1;
`;

const FooterContainer = styled.View`
  flex: ${1 / 3};
  align-items: center;
`;
