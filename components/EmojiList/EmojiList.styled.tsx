import { FlatList, Image } from "react-native";
import styled from "styled-components/native";

export const ListContainer = styled.FlatList`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-inline: 20px;
` as unknown as typeof FlatList;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 20px;
` as unknown as typeof Image;
