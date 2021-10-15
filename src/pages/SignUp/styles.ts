import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  align-items: center;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  left: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  position: absolute;
  right: 0;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;