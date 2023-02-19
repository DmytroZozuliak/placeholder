import { Box, Stack, Typography } from '@mui/material';
import styles from './style.module.scss';
import picture from '../../assets/images/2.png';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';
import { mockFormData } from '../../utils/constants/auth';
import { developer } from '../../utils/constants/developer';

const Home = () => {
  const { t } = useTranslation();
  const { password, username } = mockFormData;

  return (
    <ErrorBoundary text={t('errors.default')}>
      <Box className={styles['welcome-wrapper']}>
        <Typography variant="h3" fontSize={{ xs: 30, sm: 40, md: 50 }}>
          {t('welcome_page.project')}
        </Typography>
        <Box className={styles['info-wrapper']}>
          <Stack>
            <Typography variant="body2" fontSize={22}>
              {t('welcome_page.about')}
            </Typography>
            <Typography color="warning.main" fontSize={22}>
              {t('forms.auth.username')} - {username}
            </Typography>
            <Typography color="warning.main" fontSize={22}>
              {t('forms.auth.password')} - {password}
            </Typography>
          </Stack>
          <img src={picture} alt="main picture" />
        </Box>
        <Typography mt={3} variant="body1">
          {t('welcome_page.cv')}
          <a href={developer.cv} target="_blank" rel="noreferrer">
            {t('welcome_page.cv_name')}
          </a>
        </Typography>
      </Box>
    </ErrorBoundary>
  );
};

export default Home;
