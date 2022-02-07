import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const Wrapper = styled.View``;

export const ButtonBase = styled(Button).attrs({
  mode: 'contained',
  labelStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
})`
  padding: 5px;
  border-radius: 8px;
  margin-horizontal: 32px;
`;
