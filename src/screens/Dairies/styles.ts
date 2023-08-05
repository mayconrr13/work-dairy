import { SafeAreaView, Text, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.gray800};
  flex: 1;
  padding: 16px;
`;

export const Content = styled(View)`
  padding: 0 16px;
  margin-bottom: 240px;
`;

export const PageTitle = styled(View)`
  margin-top: 24px;
`;

export const MainText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-family: PoppinsSemiBold;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const DetailText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-family: PoppinsLight;
  font-size: 14px;
`;

export const Section = styled(View)`
  margin: 32px 0 20px;
`;

export const SectionTitle = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-family: PoppinsSemiBold;
  font-size: 18px;
  position: relative;
`;

export const DetailBar = styled(View)`
  width: 100px;
  height: 2px;
  margin-top: 2px;
  background-color: ${(props) => props.theme.colors.primary500};
`;

export const EmptyContainer = styled(View)`
  align-items: center;
  margin-top: 32px;
`;

export const EmptyMessage = styled(Text)`
  margin: 16px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-family: PoppinsLight;
  font-size: 14px;
`;
