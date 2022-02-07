import React, { FC } from 'react';
import ViewPost from './ViewPost';

type Props = {
  route: {
    params: {
      uri: string;
    };
  };
};

const ViewPostContainer: FC<Props> = ({ route }) => {
  const { uri } = route.params;

  const formatLink = () => {
    return `https://www.reddit.com${uri}`;
  };

  return <ViewPost uri={formatLink()} />;
};

export default ViewPostContainer;
