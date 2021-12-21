import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 126px;

  padding: 24px;
  margin-bottom: 16px;

  background: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
