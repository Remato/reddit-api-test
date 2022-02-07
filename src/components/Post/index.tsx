import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { dateDiff } from '../../utils/dates';
import { Routes, STACKS } from '../../utils/enums';
import {
  Wrapper,
  Footer,
  InnerFooterWrapper,
  Text,
  FotterText,
  Icon,
  Title,
  Pic,
  UserName,
} from './styles';

type Props = {
  userName: string;
  title: string;
  text: string;
  pic: string;
  votes: number;
  comments: number;
  createdAt: number;
  externalLink: string;
};

const Post: FC<Props> = ({
  userName,
  title,
  text,
  pic,
  votes,
  comments,
  createdAt,
  externalLink,
  ...rest
}) => {
  const { navigate } = useNavigation();

  const getVotes = () => {
    if (votes >= 1000) {
      return `${(votes / 1000).toFixed(2)}k`;
    }
    if (votes <= -1000) {
      return `${(-votes / 1000).toFixed(2)}k`;
    }
    return votes;
  };

  const hasPicture = (): JSX.Element => {
    return text === '' ? <Pic source={{ uri: pic }} /> : <Text>{text}</Text>;
  };

  const getHeader = () => (
    <UserName>{`u/${userName} • ${dateDiff(createdAt)}`}</UserName>
  );

  const goToWebView = () =>
    navigate(STACKS.PRIVATE, {
      screen: Routes.VIEW_POST,
      params: {
        uri: externalLink,
      },
    });

  return (
    <Wrapper onPress={() => goToWebView()} {...rest}>
      {getHeader()}
      <Title>{title}</Title>
      {hasPicture()}
      <Footer>
        <InnerFooterWrapper>
          <Icon name="arrow-up-bold-outline" />
          <FotterText>{getVotes()}</FotterText>
          <Icon name="arrow-down-bold-outline" />
        </InnerFooterWrapper>
        <InnerFooterWrapper>
          <Icon name="comment-outline" />
          <FotterText>{comments}</FotterText>
        </InnerFooterWrapper>
        <Icon name="share-outline" />
        <Icon name="gift-outline" />
      </Footer>
    </Wrapper>
  );
};

export default Post;
