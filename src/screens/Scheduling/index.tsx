import React, { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { format } from "date-fns";
import { StatusBar } from "expo-status-bar";

import { useNavigation, useRoute } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { Calendar, DayProps } from "../../components/Calendar";
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
import { generateDateInterval } from "../../components/Calendar/generateDateInterval";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { CarDTO } from "../../dtos/CarDTO";

interface RouteParams {
  car: CarDTO;
}

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState({});
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const route = useRoute();
  const { car } = route.params as RouteParams;

  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleNavigateToSchedulingDetails() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      return Alert.alert("Selecione o intervalo de datas para alugar!");
    }

    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }
  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const datesRange = generateDateInterval(start, end);
    setMarkedDates(datesRange);

    const firstDate = Object.keys(datesRange)[0];
    const lastDate =
      Object.keys(datesRange)[Object.keys(datesRange).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(lastDate)), "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel {"\n"}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod?.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod?.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          enabled={!!rentalPeriod.startFormatted}
          title="Confirmar"
          onPress={handleNavigateToSchedulingDetails}
        />
      </Footer>
    </Container>
  );
}
