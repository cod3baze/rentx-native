import React from "react";

import { FlatList } from "react-native";

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
        {imagesURL.map((item, index) => (
          <ImageIndex key={String(item)} active={true} />
        ))}
      </ImageIndexes>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={imagesURL}
        keyExtractor={(item) => String(item)}
        renderItem={({ item, index }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: imagesURL[index] }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
