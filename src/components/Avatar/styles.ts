import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  size: number;
}

export const Container = styled(View)<ContainerProps>`
  background-color: ${(props) => props.theme.colors.primary500};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  position: relative;
  align-items: stretch;
  justify-content: center;
`;

export const AvatarImage = styled(Image)<ContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
`;

export const AvatarInitials = styled(Text)`
  width: 100%;
  font-size: 12px;
  font-family: PoppinsSemiBold;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1px;
  text-align: center;
`;

export const Border = styled(View)<ContainerProps>`
  background-color: transparent;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  border: 2px solid ${(props) => props.theme.colors.gray900}50;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`;
