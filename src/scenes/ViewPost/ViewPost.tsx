import React, { FC } from 'react';
import { WebView } from 'react-native-webview';

type Props = {
  uri: string;
};

const ViewPost: FC<Props> = ({ uri }) => {
  return <WebView source={{ uri }} />;
};

export default ViewPost;
