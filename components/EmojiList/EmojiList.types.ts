import { ImageSource } from "expo-image"

export type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}