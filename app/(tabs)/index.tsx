import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import CustomButton from "@/components/Button/CustomButton";
import { useState } from "react";
import IconButton from "@/components/IconButton/IconButton";
import CircleButton from "@/components/CircleButton/CircleButton";
import EmojiPicker from "@/components/EmojiPicker/EmojiPicker";
import { ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList/EmojiList";
import EmojiSticker from "@/components/EmojiSticker/EmojiSticker";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(
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
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <Container>
      <ImageContainer>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </ImageContainer>

      {showAppOptions ? (
        <OptionsContainer>
          <OptionsRow>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </OptionsRow>
        </OptionsContainer>
      ) : (
        <FooterContainer>
          <CustomButton
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <CustomButton
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </FooterContainer>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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

const OptionsContainer = styled.View`
  position: absolute;
  bottom: 80px;
`;

const OptionsRow = styled.View`
  align-items: center;
  flex-direction: row;
`;
