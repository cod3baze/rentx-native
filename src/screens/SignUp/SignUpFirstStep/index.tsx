import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("E-mail mal formatado"),
  name: Yup.string().required("Nome obrigatório"),
  driverLicense: Yup.string().required("CNH obrigatório"),
});

export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const navigation = useNavigation<any>();

  function handleBack() {
    navigation.goBack();
  }
  async function handleNextStep() {
    try {
      const data = { name, email, driverLicense };

      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opá", error.message);
      } else {
        Alert.alert("Erro ao criar conta!", "Verifique as suas credenciais");
      }
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

            <Input
              value={name}
              onChangeText={setName}
              iconName="user"
              placeholder="Nome"
            />
            <Input
              value={email}
              onChangeText={setEmail}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              value={driverLicense}
              onChangeText={setDriverLicense}
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </Form>

          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
