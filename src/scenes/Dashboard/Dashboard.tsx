import React, { FC } from 'react';
import Post from '../../components/Post';
import {
  Loading,
  Posts,
  Header,
  HeaderLabel,
  TouchableWrapper,
  LoadingWrapper,
  VerticalDivider,
} from './styles';

type Props = {
  posts: Children[];
  loading: boolean;
  pressedFilters: boolean[];
  onPressNew(): void;
  onPressTop(): void;
  onPressHot(): void;
  onPressPopular(): void;
  fetchNextPosts(): Promise<void>;
};

const Dashboard: FC<Props> = ({
  posts,
  loading,
  pressedFilters,
  onPressHot,
  onPressTop,
  onPressNew,
  onPressPopular,
  fetchNextPosts,
}) => {
  const renderPosts = () => {
    return (
      <Posts
        data={posts}
        onEndReached={fetchNextPosts}
        renderItem={({ item }): JSX.Element => {
          const { data } = item as Children;
          const {
            id,
            author,
            url,
            title,
            selftext,
            num_comments,
            score,
            created_utc,
            permalink,
          } = data as ChildrenData;

          return (
            <Post
              key={id}
              userName={author}
              pic={url}
              title={title}
              text={selftext}
              comments={num_comments}
              votes={score}
              createdAt={created_utc}
              externalLink={permalink}
            />
          );
        }}
      />
    );
  };

  return loading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <>
      <Header>
        <TouchableWrapper onPress={onPressNew}>
          <HeaderLabel selected={pressedFilters[0]}>New</HeaderLabel>
        </TouchableWrapper>
        <VerticalDivider />
        <TouchableWrapper onPress={onPressTop}>
          <HeaderLabel selected={pressedFilters[1]}>Top</HeaderLabel>
        </TouchableWrapper>
        <VerticalDivider />
        <TouchableWrapper onPress={onPressPopular}>
          <HeaderLabel selected={pressedFilters[2]}>Popular</HeaderLabel>
        </TouchableWrapper>
        <VerticalDivider />
        <TouchableWrapper onPress={onPressHot}>
          <HeaderLabel selected={pressedFilters[3]}>Hot</HeaderLabel>
        </TouchableWrapper>
      </Header>
      {renderPosts()}
    </>
  );
};

export default Dashboard;
