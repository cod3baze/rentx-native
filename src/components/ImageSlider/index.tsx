import React, { useRef, useState } from "react";

import { FlatList, ViewToken } from "react-native";

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

interface ChangeImageSliderProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesURL }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef(
    ({ changed, viewableItems }: ChangeImageSliderProps) => {
      const index = viewableItems[0].index!;
      setImageIndex(index);
    }
  );

  return (
    <Container>
      <ImageIndexes>
        {imagesURL.map((item, index) => (
          <ImageIndex key={String(item)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={imagesURL}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
