import { Grid, Input, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react';
import { IBoard } from '../../interfaces/apiInterfaces';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';

const Boards = () => {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [search, setSearch] = useState(() => localStorage.getItem('searchBoards-rss') || '');
  const [focused, setFocused] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

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
          sx={{ paddingLeft: 4, fontSize: '1.2rem' }}
          placeholder={t('boards.search_board')}
          value={search}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Box position="absolute" sx={{ left: 0, top: 8 }}>
          <SearchIcon fontSize="small" color={focused ? 'primary' : 'inherit'} />
        </Box>
      </Stack>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} my={5}>
        {boards &&
          boards.map((board) => {
            return <div key={board['_id']}>board</div>;
            // <BoardCard key={board['_id']} board={board} />
          })}
      </Grid>
    </ErrorBoundary>
  );
};

export default Boards;
