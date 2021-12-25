import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { Alert, StyleSheet, BackHandler } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Reanimated, {
  withSpring,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const ButtonAnimated = Reanimated.createAnimatedComponent(RectButton);

import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context: any) {
      positionX.value = context.positionX + event.translationX;
      positionY.value = context.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const navigation = useNavigation<any>();
  const theme = useTheme();

  function handleNavigateToCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", {
      car,
    });
  }
  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function getCars() {
      try {
        const { data } = await api.get("/cars");

        setCars(data);
      } catch (error: any) {
        console.log(error.message);
        Alert.alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo />
          {!isLoading && <TotalCars>Total de carros {cars.length}</TotalCars>}
        </HeaderContent>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car onPress={() => handleNavigateToCarDetails(item)} data={item} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Reanimated.View
          style={[
            myCarsButtonAnimatedStyles,
            { position: "absolute", bottom: 13, right: 22 },
          ]}
        >
          <ButtonAnimated
            style={[styles.button, { backgroundColor: theme.colors.main }]}
            onPress={handleOpenMyCars}
          >
            <Ionicons
              size={32}
              color={theme.colors.shape}
              name="ios-car-sport"
            />
          </ButtonAnimated>
        </Reanimated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
