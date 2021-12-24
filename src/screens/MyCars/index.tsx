import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Load } from "../../components/Load";

import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import { Container } from "./styles";

export function MyCars() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await api.get<CarDTO[]>(`/schedules_byuser?user_id=1`);
        setCars(data);
      } catch (error: any) {
        Alert.alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, []);

  return <Container>{isLoading && <Load />}</Container>;
}
