import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { LinkAlignment, LinkApparence } from './Link';

interface LinkProps {
  apparence?: LinkApparence;
  textAlign?: LinkAlignment;
}

export const Container = styled(TouchableOpacity)<LinkProps>`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
`;

export const Label = styled(Text)<LinkProps>`
  width: 100%;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.light};
  color: ${(props) => {
    if (props.apparence === 'primary') {
      return props.theme.colors.primary500;
    }
    return props.theme.colors.danger500;
  }};
  text-decoration: underline solid;
  text-decoration-color: ${(props) => {
    if (props.apparence === 'primary') {
      return props.theme.colors.primary500;
    }
    return props.theme.colors.danger500;
  }};
  text-align: ${(props) => props.textAlign};
`;
