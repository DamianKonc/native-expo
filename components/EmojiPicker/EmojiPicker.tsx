import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { Props } from "./EmojiPicker.types";
import {
  StyledModalContent,
  StyledTitle,
  StyledTitleContainer,
} from "./EmojiPicker.styled";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EmojiPicker = ({ isVisible, children, onClose }: Props) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <StyledModalContent>
          <StyledTitleContainer>
            <StyledTitle>Choose a sticker</StyledTitle>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </StyledTitleContainer>
          {children}
        </StyledModalContent>
      </Modal>
    </View>
  );
};

export default EmojiPicker;
