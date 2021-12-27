import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: ${RFPercentage(50)}px; /** ou 6/2 = 3*/

  background: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;
