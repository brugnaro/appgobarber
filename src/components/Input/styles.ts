import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  align-items: center;
  background: #232129;
  border-radius: 10px; 
  flex-direction: row;
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;
  width: 100%;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  flex: 1;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
