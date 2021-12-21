import React from "react";
import Svg from "react-native-svg";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, TotalCars } from "./styles";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCars>Total de carros 12</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
}
