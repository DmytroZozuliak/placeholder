import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useTypedSelector } from '../../hooks/redux';

const Profile = () => {
  const { t } = useTranslation();
  const userName = useTypedSelector((state) => state.user.userName);

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
          {t('profile_page.title', { userName })}
        </Typography>
      </Stack>
    </ErrorBoundary>
  );
};

export default Profile;
