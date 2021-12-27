import { useNavigation, useRoute } from "@react-navigation/native";
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
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
import { api } from "../../../services/api";

interface RouteParams {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

const schema = Yup.object().shape({
  password: Yup.string().required("Senha obrigatório"),
  passwordConfirm: Yup.string().oneOf(
    [null, Yup.ref("password")],
    "As senhas precisam ser iguais"
  ),
});

export function SignUpSecondStep() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { user } = route.params as RouteParams;

  function handleBack() {
    navigation.goBack();
  }
  async function handleCreateNewAccount() {
    setIsLoading(true);

    try {
      const data = { password, passwordConfirm };

      await schema.validate(data);

      await api
        .post("/users", {
          name: user.name,
          email: user.email,
          driver_license: user.driverLicense,
          password,
        })
        .then(() =>
          navigation.navigate("Confirmation", {
            title: "Conta criada!",
            message: `Agora é só fazer login\ne aproveitar`,
            nextScreenRoute: "SignIn",
          })
        )
        .catch((err) => {
          throw new Error(err);
        });

      navigation.navigate("Confirmation", {
        title: "Conta criada!",
        message: `Agora é só fazer login\ne aproveitar`,
        nextScreenRoute: "SignIn",
      });
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opá", error.message);
      } else {
        Alert.alert("Erro ao criar conta!", error.message);
      }
    } finally {
      setIsLoading(false);
    }
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

            <PasswordInput
              value={password}
              onChangeText={setPassword}
              iconName="lock"
              placeholder="Senha"
            />
            <PasswordInput
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              iconName="lock"
              placeholder="Repetir senha"
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleCreateNewAccount}
            enabled={!isLoading}
            isLoading={isLoading}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
