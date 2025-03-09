import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import CustomButton from "@/components/Button/CustomButton";
import { useState } from "react";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <Container>
      <ImageContainer>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </ImageContainer>
      <FooterContainer>
        <CustomButton
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
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
