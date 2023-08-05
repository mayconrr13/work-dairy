import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const DairyContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: stretch;
  margin-bottom: 24px;
`;

export const DairyImageContainer = styled(View)`
  flex: 1;
  height: 114px;
  width: 100%;
  align-items: stretch;
  position: relative;
  background-color: pink;
  border-radius: 8px 8px 0 0;
`;

export const DairyImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;

export const StatusBadge = styled(View)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${(props) => props.theme.colors.gray700};
  padding: 2px 8px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

export const StatusIndicator = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary600};
  margin-right: 8px;
`;

export const StatusName = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-size: 10px;
  font-family: PoppinsSemiBold;
`;

export const DairyInfo = styled(View)`
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray700};
  border-radius: 0 0 8px 8px;
`;

export const DairyDetails = styled(View)``;

export const DairyUsers = styled(View)`
  flex-direction: row;
  column-gap: -12px;
  align-items: center;
`;

export const DairyName = styled(Text)`
  font-size: 14px;
  font-family: PoppinsSemiBold;
  color: ${(props) => props.theme.colors.white};
`;

export const DairyLastUpdate = styled(Text)`
  font-size: 10px;
  font-family: PoppinsSemiBold;
  color: ${(props) => props.theme.colors.gray500};
`;

export const ExtraUsers = styled(View)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.gray200};
  border: 2px solid ${(props) => props.theme.colors.gray700};
  align-items: stretch;
  justify-content: center;
  box-sizing: content-box;
`;

export const ExtraUsersAmount = styled(Text)`
  color: ${(props) => props.theme.colors.gray800};
  font-size: 10px;
  font-family: PoppinsSemiBold;
  text-align: center;
`;
