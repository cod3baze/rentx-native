import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, IconContainer, InputText } from "./styles";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface PasswordInputProps extends TextInputProps {
  value?: string;
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({
  value,
  iconName,
  ...rest
}: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const theme = useTheme();

  function handlePasswordVisibility() {
    setPasswordIsVisible(!passwordIsVisible);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container isFocused={isFocused || isFilled}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled
              ? theme.colors.main
              : theme.colors.text_details
          }
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        secureTextEntry={passwordIsVisible}
      />

      <BorderlessButton onPress={handlePasswordVisibility}>
        <IconContainer>
          <Feather
            name={passwordIsVisible ? "eye-off" : "eye"}
            size={24}
            color={theme.colors.shape}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
