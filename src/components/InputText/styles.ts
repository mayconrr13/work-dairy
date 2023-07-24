import { Text, TextInput, View } from 'react-native';
import { styled } from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled(View)`
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.semiBold};
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)<InputProps>`
  width: 100%;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.colors.white};
  border: 2px solid
    ${(props) => (props.isFocused ? props.theme.colors.primary500 : props.theme.colors.gray500)};
  border-radius: 8px;
  padding: 12px;
`;
