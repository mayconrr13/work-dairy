import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { ButtonApparence } from './Button';

interface ButtonProps {
  apparence: ButtonApparence;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  background-color: ${(props) => {
    if (props.apparence === 'primary') {
      return props.theme.colors.primary500;
    }
    if (props.apparence === 'danger') {
      return props.theme.colors.danger500;
    }
    return props.theme.colors.white;
  }};

  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
`;

export const Label = styled(Text)<ButtonProps>`
  font-size: 14px;
  font-family: ${(props) => props.theme.font.semiBold};
  color: ${(props) => {
    if (props.apparence === 'special') {
      return props.theme.colors.black;
    }
    return props.theme.colors.white;
  }};
`;
