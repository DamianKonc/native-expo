import { StyledImage } from "./ImageViewer.styled";
import { Props } from "./ImageViewer.types";

const ImageViewer = ({ imgSource }: Props) => {
  return <StyledImage source={imgSource} />;
};

export default ImageViewer;
