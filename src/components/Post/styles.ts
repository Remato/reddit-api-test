import styled from 'styled-components/native';
import IconBase from 'react-native-vector-icons/MaterialCommunityIcons';

type ButtonProps = {
  shadow?: boolean;
};

type ImageProps = {
  width?: number;
  height?: number;
};

// card of posts
export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 10px 15px #0000001a;
  elevation: 15;
  margin-bottom: 8px;
`;

// footer of posts
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: 16px;
  margin-vertical: 8px;
`;

export const InnerFooterWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

// resize picture
export const Pic = styled.Image.attrs({
  resizeMode: 'stretch',
})<ImageProps>`
  height: 240px;
  width: 100%;
`;

export const Icon = styled(IconBase).attrs({
  size: 24,
  color: '#878A8C',
})``;

export const UserName = styled.Text`
  color: #878a8c;
  font-size: 12px;
  margin-horizontal: 16px;
  margin-vertical: 4px;
`;

export const Title = styled.Text`
  color: #1c1c1c;
  font-size: 17px;
  font-weight: bold;
  margin-horizontal: 16px;
  margin-bottom: 8px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 4,
})`
  color: #878a8c;
  margin-horizontal: 16px;
`;

export const FotterText = styled.Text`
  color: #878a8c;
  font-weight: bold;
`;
