import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Footer, Container, Header, Subtitle, Title, Form } from "./styles";
import { useNavigation } from "@react-navigation/native";

const sigInSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("E-mail mal formatado"),
  password: Yup.string().required("Senha obrigatório"),
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const navigation = useNavigation<any>();

  async function handleSignIn() {
    try {
      await sigInSchema.validate({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opá", error.message);
      } else {
        Alert.alert("Erro na Autenticação!", "Verifique as suas credenciais");
      }
    }
  }
  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="dark" animated />

          <Header>
            <Title>
              Estamos {"\n"}
              Quase lá.
            </Title>

            <Subtitle>
              Faça seu login para começar {"\n"} uma experiência incrível.
            </Subtitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={() => handleSignIn()}
              enabled={!!email}
              isLoading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              light
              onPress={handleNewAccount}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
