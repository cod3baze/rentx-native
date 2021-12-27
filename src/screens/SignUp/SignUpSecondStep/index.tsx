import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles";

export function SignUpSecondStep() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleBack() {
    navigation.goBack();
  }
  function handleNextStep() {
    navigation.navigate("SignUpSecondStep");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="dark" animated />

          <Header>
            <BackButton onPress={handleBack} />

            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>
            Crie sua {"\n"}
            conta.
          </Title>

          <Subtitle>Faça seu cadastro de {"\n"} forma rápida e fácil.</Subtitle>

          <Form>
            <FormTitle>02. Senha</FormTitle>

            <PasswordInput iconName="lock" placeholder="Senha" />
            <PasswordInput iconName="lock" placeholder="Repetir senha" />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            enabled={false}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
