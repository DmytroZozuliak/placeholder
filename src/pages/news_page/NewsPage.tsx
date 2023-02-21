import { Button, Input, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';
import NewsCard from '../../components/NewsCard';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { fetchNews, newsActions } from '../../store/reducers/newsSlice';
import { useDebounceValue } from '../../hooks/useDebounceValue';

const Boards = () => {
  const { news, status, page, isFetched } = useTypedSelector((state) => state.news);
  const dispatch = useTypedDispatch();
  const [search, setSearch] = useState(() => localStorage.getItem('searchNews') || '');
  const [focused, setFocused] = useState(false);
  const { t } = useTranslation();
  const debouncedSearch = useDebounceValue(search);

  const filteredDate = useMemo(() => {
    return news.filter((news) => news.title.includes(debouncedSearch));
  }, [debouncedSearch, news]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchNews(1));
      dispatch(newsActions.isFetched(true));
    }
  }, [dispatch, isFetched]);

  const handleMoreRequest = () => {
    dispatch(newsActions.addPage(page + 1));
    dispatch(fetchNews(page + 1));
  };

  const renderList = () => {
    if (status === 'error') {
      return <Typography variant="h4">Something went wrong</Typography>;
    }
    return (
      <>
        {filteredDate.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
        <Button variant="contained" color="secondary" onClick={handleMoreRequest}>
          {t('buttons.more')}
        </Button>
      </>
    );
  };

  return (
    <ErrorBoundary text={t('errors.default')}>
      <Stack
        position="relative"
        my="20px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Input
          sx={{ paddingLeft: 4, fontSize: 24 }}
          placeholder={t('news_page.input_placeholder')}
          value={search}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Box position="absolute" sx={{ left: 0, top: 10 }}>
          <SearchIcon fontSize="medium" color={focused ? 'primary' : 'inherit'} />
        </Box>
      </Stack>

      <Stack spacing={{ xs: 2, md: 3 }} my={4}>
        {renderList()}
      </Stack>
    </ErrorBoundary>
  );
};

export default Boards;
