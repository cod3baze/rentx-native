import React from "react";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Car } from "../../components/Car";

export function Home() {
  const navigation = useNavigation<any>();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 175,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  function handleNavigateToCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCars>Total de carros 12</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car onPress={() => handleNavigateToCarDetails()} data={carData} />
        )}
      />
    </Container>
  );
}
