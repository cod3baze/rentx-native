import React from "react";
import { useTheme } from "styled-components";
import { StatusBar } from "expo-status-bar";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";
import { Button } from "../../components/Button";

import ArrowSVG from "../../assets/arrow.svg";

import {
  Container,
  DateInfo,
  DateTitle,
  DateValue,
  Header,
  RentalPeriod,
  Title,
  Content,
  Footer,
} from "./styles";

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel {"\n"}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
