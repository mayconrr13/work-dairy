import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styled } from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled(View)`
  align-items: stretch;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.semiBold};
  margin-bottom: 8px;
`;

export const InputSection = styled(View)<InputProps>`
  flex-direction: row;
  gap: 16px;
  width: 100%;
  align-items: center;
  border: 2px solid
    ${(props) => (props.isFocused ? props.theme.colors.primary500 : props.theme.colors.gray500)};
  border-radius: 8px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
`;

export const VisibilityControl = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
`;
