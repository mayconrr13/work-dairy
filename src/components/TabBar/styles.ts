import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styled } from 'styled-components';

interface ExtendedTab {
  isSelected: boolean;
}

export const TabBarContainer = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const TabBarContent = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  padding-bottom: 16px;
  background-color: ${(props) => props.theme.colors.gray800};
  box-sizing: border-box;
  position: relative;
`;

export const TabOption = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TabBorder = styled(View)<ExtendedTab>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.primary500 : props.theme.colors.gray500};
  height: 3px;
  width: 100%;
`;

export const TabButton = styled(TouchableOpacity)`
  padding: 16px 0 16px;
  height: auto;
`;

export const TabIcon = styled(Feather)<ExtendedTab>`
  color: ${(props) =>
    props.isSelected ? props.theme.colors.primary500 : props.theme.colors.gray500};
`;

export const AddButtonContainer = styled(View)`
  position: absolute;
  top: -32px;
  left: 50%;
  margin-left: -32px;
`;
