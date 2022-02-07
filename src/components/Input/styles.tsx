import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Wrapper = styled.View``;

export const TextInputBase = styled(TextInput).attrs({
  mode: 'outlined',
  activeOutlineColor: '#194f82',
})`
  margin-horizontal: 16px;
`;

export const Hint = styled.Text`
  margin-horizontal: 18px;
  color: #e87850;
`;
