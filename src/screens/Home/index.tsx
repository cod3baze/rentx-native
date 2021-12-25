import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCars>Total de carros {cars.length}</TotalCars>
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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons size={32} color={theme.colors.shape} name="ios-car-sport" />
      </MyCarsButton>
    </Container>
  );
}
