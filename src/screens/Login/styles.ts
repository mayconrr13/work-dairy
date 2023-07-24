import { Image, Text } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(SafeAreaView)`
  height: 100%;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.gray900};
`;

export const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LoginContent = styled(View)`
  background-color: ${(props) => props.theme.colors.gray900};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
  margin-top: auto;
  gap: 12px;
`;

export const LoginOptions = styled(View)`
  width: 100%;
  align-items: stretch;
  gap: 8px;
  margin: 12px 0;
`;

export const LoginOrText = styled(Text)`
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  font-family: PoppinsLight;
  text-align: center;
`;
