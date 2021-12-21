import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  height: 60px;

  background: ${({ theme, color }) => (color ? color : theme.colors.main)};

  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
`;
