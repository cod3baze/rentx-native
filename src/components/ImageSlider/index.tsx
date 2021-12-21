import React from "react";

import {
  Container,
  ImageIndex,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface ImageSliderProps {
  imagesURL: string[];
}

export function ImageSlider({ imagesURL }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesURL[0] }} />
      </CarImageWrapper>
    </Container>
  );
}
