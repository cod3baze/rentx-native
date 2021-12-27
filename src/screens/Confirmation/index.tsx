import React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

interface ConfirmationRouteParams {
  title: string;
  message?: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<any>();
  const route = useRoute();

  const { title, message, nextScreenRoute } =
    route.params as ConfirmationRouteParams;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar style="light" />

      <LogoSVG width={width} />

      <Content>
        <DoneSVG width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton onPress={handleConfirm} title="ok" />
      </Footer>
    </Container>
  );
}
