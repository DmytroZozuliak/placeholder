import { Grid, Input, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary text={t('errors.default')}>
      <Stack
        position="relative"
        my="20px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography
          variant="h6"
          align="center"
          fontSize={34}
          sx={{ '@media (max-width: 500px)': { fontSize: '26px' } }}
        >
          Profile
        </Typography>
      </Stack>
    </ErrorBoundary>
  );
};

export default Profile;
