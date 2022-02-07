import styled from 'styled-components/native';
import ButtonBase from '../../components/Button';
import InputBase from '../../components/Input';

export const Wrapper = styled.View`
  flex: 1;
`;

// resize images
export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 20%;
  width: 100%;
  margin-vertical: 32px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;

export const Button = styled(ButtonBase)``;

export const Input = styled(InputBase)`
  margin-top: 8px;
`;
