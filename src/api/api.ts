import axios from 'axios';
import { PicsFilter } from '../types/redditFilters';

const api = axios.create({
  baseURL: `https://api.reddit.com/r/pics`,
});

export const fetchPics = async (
  query: string,
  filter: PicsFilter,
): Promise<RedditResponse> => {
  try {
    const { data } = await api.get(`${filter}?after=${query}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
