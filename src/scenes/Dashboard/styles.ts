import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

type LabelProps = {
  selected: boolean;
};

// change the underline beetween filers labels
const hasSelected = ({ selected }: LabelProps) => {
  return selected ? 'underline' : 'none';
};

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

// simple loading
export const Loading = styled(ActivityIndicator).attrs({
  color: '#ff6314',
  size: 'large',
})``;

export const Posts = styled.FlatList``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 8px;
`;

// expand the area of labels
export const TouchableWrapper = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})``;

export const HeaderLabel = styled.Text<LabelProps>`
  font-size: 17px;
  color: #1c1c1c;
  text-decoration-line: ${hasSelected};
`;

export const VerticalDivider = styled.View`
  border: 1px solid #ff6314;
`;
