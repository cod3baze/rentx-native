import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { CarDTO } from "../../dtos/CarDTO";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  justify-content: flex-end;

  width: 100%;
  height: 113px;

  background: ${({ theme }) => theme.colors.header};
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
