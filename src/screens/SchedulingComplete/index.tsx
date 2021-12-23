import React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar style="light" />

      <LogoSVG width={width} />

      <Content>
        <DoneSVG width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="ok" />
      </Footer>
    </Container>
  );
}
