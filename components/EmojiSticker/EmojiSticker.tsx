import { View, Text } from "react-native";
import React from "react";
import { Props } from "./EmojiSticker.types";
import { Image } from "expo-image";

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSticker;
