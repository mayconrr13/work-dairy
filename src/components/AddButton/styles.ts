import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

interface ContainerProps {
  buttonSize: number;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: ${(props) => props.buttonSize}px;
  height: ${(props) => props.buttonSize}px;
  border-radius: ${(props) => props.buttonSize / 2}px;
  background-color: ${(props) => props.theme.colors.primary500};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.colors.gray500};
`;
