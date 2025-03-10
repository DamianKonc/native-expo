import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}