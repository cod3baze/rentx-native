import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 96px;

  background: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(31)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 40px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_details};
  line-height: ${RFValue(26)}px;
  text-align: center;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  margin: 80px 0;

  align-items: center;
`;
