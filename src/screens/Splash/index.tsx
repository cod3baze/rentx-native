import React from "react";
import { StyleSheet, Button, Dimensions } from "react-native";

import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { Container } from "./styles";

const WIDTH = Dimensions.get("window").width;

export function Splash() {
  const animationPosition = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animationPosition.value, {
            duration: 1000,
            easing: Easing.bezier(0.01, 0.73, 1, -0.28),
          }),
        },
      ],
    };
  });

  function handleAnimationPosition() {
    animationPosition.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
      <Reanimated.View style={[styles.box, animatedStyles]} />

      <Button title="Mover" onPress={handleAnimationPosition} />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
