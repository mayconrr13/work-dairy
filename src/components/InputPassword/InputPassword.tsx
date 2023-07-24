import { TextInputProps } from 'react-native';
import { Container, Input, InputSection, Label, VisibilityControl } from './styles';
import React, { useState } from 'react';
import { customTheme } from '../../theme/customTheme';
import { Feather } from '@expo/vector-icons';

export interface InputPasswordProps extends TextInputProps {
  label?: string;
}

const InputPassword = ({ label, ...rest }: InputPasswordProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <InputSection isFocused={isFocused}>
        <Input
          {...rest}
          placeholderTextColor={customTheme.colors.gray500}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={!passwordIsVisible}
        />
        <VisibilityControl onPress={handlePasswordVisibility}>
          {passwordIsVisible ? (
            <Feather name="eye-off" size={20} color={customTheme.colors.primary500} />
          ) : (
            <Feather name="eye" size={20} color={customTheme.colors.primary500} />
          )}
        </VisibilityControl>
      </InputSection>
    </Container>
  );
};

export default InputPassword;
