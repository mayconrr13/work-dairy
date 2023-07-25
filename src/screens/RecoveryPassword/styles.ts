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

export const RecoveryPasswordContent = styled(View)`
  background-color: ${(props) => props.theme.colors.gray900};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
  margin-top: auto;
  gap: 24px;
`;

export const Message = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-family: PoppinsLight;
  line-height: 20px;
`;
