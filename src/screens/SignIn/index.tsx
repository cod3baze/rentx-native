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
import { useAuthContext } from "../../contexts/Auth";

const sigInSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("E-mail mal formatado"),
  password: Yup.string().required("Senha obrigatório"),
});

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, user } = useAuthContext();

  const theme = useTheme();
  const navigation = useNavigation<any>();

  async function handleSignIn() {
    setIsLoading(true);

    try {
      const data = { email, password };

      await sigInSchema.validate(data);

      await signIn(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opá", error.message);
      } else {
        Alert.alert("Erro na Autenticação!", "Verifique as suas credenciais");
      }
    } finally {
      setIsLoading(false);
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
              Quase lá. {user?.name}
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
              isLoading={isLoading}
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
