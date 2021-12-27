import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles";

export function SignUpFirstStep() {
  const navigation = useNavigation<any>();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar style="dark" animated />

      <Header>
        <BackButton onPress={handleBack} />

        <Steps>
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>

      <Title>
        Crie sua {"\n"}
        conta.
      </Title>

      <Subtitle>Faça seu cadastro de {"\n"} forma rápida e fácil.</Subtitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
}
