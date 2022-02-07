import React, { FC, useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Dashboard from './Dashboard';
import { FILTER } from '../../utils/enums';
import { fetchPics } from '../../api';

const DashboardContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FILTER>(FILTER.NEW);
  const [posts, setPosts] = useState<Children[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [pressedFilters, setPressedFilters] = useState([
    true,
    false,
    false,
    false,
  ]);

  const initialFetch = async () => {
    setLoading(true);

    const { data: posts } = await fetchPics('', filter);
    setNextPage(posts.after);
    setPosts(posts.children);

    setLoading(false);
  };

  const nextPosts = async () => {
    const { data: nextPosts } = await fetchPics(nextPage, filter);
    setNextPage(nextPosts.after);
    setPosts([...posts, ...nextPosts.children]);
  };

  const changeFilter = async (filter: FILTER) => {
    setLoading(true);
    const { data: changedFilter } = await fetchPics('', filter);
    setPosts(changedFilter.children);
    setLoading(false);
  };

  const selectNew = async () => {
    setFilter(FILTER.NEW);
    await changeFilter(FILTER.NEW);
    setPressedFilters([true, false, false, false]);
  };

  const selectTop = async () => {
    setFilter(FILTER.TOP);
    await changeFilter(FILTER.TOP);
    setPressedFilters([false, true, false, false]);
  };

  const selectPopular = async () => {
    setFilter(FILTER.POPULAR);
    await changeFilter(FILTER.POPULAR);
    setPressedFilters([false, false, true, false]);
  };

  const selectHot = async () => {
    setFilter(FILTER.HOT);
    await changeFilter(FILTER.HOT);
    setPressedFilters([false, false, false, true]);
  };

  useFocusEffect(
    useCallback(() => {
      initialFetch();
    }, []),
  );

  return (
    <Dashboard
      posts={posts}
      loading={loading}
      onPressNew={selectNew}
      onPressTop={selectTop}
      onPressHot={selectHot}
      fetchNextPosts={nextPosts}
      onPressPopular={selectPopular}
      pressedFilters={pressedFilters}
    />
  );
};

export default DashboardContainer;
