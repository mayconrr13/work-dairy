import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';
import React, { useState } from 'react';
import { customTheme } from '../../theme/customTheme';

export interface InputTextProps extends TextInputProps {
  label?: string;
}

const InputText = ({ label, ...rest }: InputTextProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <Input
        {...rest}
        placeholderTextColor={customTheme.colors.gray500}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
    </Container>
  );
};

export default InputText;
