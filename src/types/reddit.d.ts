type RedditResponse = {
  kind: string;
  data: {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: Children[];
  };
};

type Children = {
  kind: string;
  data: ChildrenData;
};

type ChildrenData = {
  id: string;
  title: string;
  selftext: string;
  author: string;
  score: number;
  upvote_ratio: number;
  total_awards_received: number;
  created: number;
  edited: number;
  num_comments: number;
  url: string;
  permalink: string;
  created_utc: number;
};
