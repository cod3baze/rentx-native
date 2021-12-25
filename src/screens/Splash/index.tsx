import React, { useEffect } from "react";

import BrandSVG from "../../assets/brand.svg";
import LogoSVG from "../../assets/logo.svg";

import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { Container } from "./styles";

export function Splash() {
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAnimation.value,
      [0, 50],
      [1, 0],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [0, -50],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAnimation.value,
      [0, 25, 50],
      [0, 0.3, 1],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [-50, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  useEffect(() => {
    splashAnimation.value = withTiming(50, {
      duration: 1000,
    });
  }, []);

  return (
    <Container>
      <Reanimated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSVG width={80} height={50} />
      </Reanimated.View>

      <Reanimated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSVG width={180} height={20} />
      </Reanimated.View>
    </Container>
  );
}
