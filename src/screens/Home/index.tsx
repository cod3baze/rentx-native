import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigation = useNavigation<any>();

  function handleNavigateToCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", {
      car,
    });
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
          <TotalCars>Total de carros 12</TotalCars>
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
    </Container>
  );
}
