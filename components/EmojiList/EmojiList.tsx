import React, { useState } from "react";
import { ListContainer, StyledImage } from "./EmojiList.styled";
import { ImageSource } from "expo-image";
import { Props } from "./EmojiList.types";
import { Platform, Pressable } from "react-native";

const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<ImageSource[]>([
    require("../../assets/images/emoji1.png"),
    require("../../assets/images/emoji2.png"),
    require("../../assets/images/emoji3.png"),
    require("../../assets/images/emoji4.png"),
    require("../../assets/images/emoji5.png"),
    require("../../assets/images/emoji6.png"),
  ]);

  return (
    <ListContainer
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal;
          }}
        >
          <StyledImage source={item} key={index} />
        </Pressable>
      )}
    />
  );
};

export default EmojiList;
