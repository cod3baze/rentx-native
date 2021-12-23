import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 80px;
  height: 46px;

  background: ${({ theme }) => theme.colors.shape_dark}

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};

  text-transform: uppercase;
`;
