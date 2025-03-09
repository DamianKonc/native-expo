import { StyledImage } from "./ImageViewer.styled";
import { Props } from "./ImageViewer.types";

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? selectedImage : imgSource;

  return <StyledImage source={imageSource} />;
};

export default ImageViewer;
