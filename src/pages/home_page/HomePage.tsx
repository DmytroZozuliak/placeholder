import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import picture from '../../assets/images/2.png';
import { developer } from '../../utils/constants/developer';
import { useTypedSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorBoundary from '../../components/ErrorBoundary';
import { RoutePath } from '../../utils/constants/routes';

const Home = () => {
  const navigate = useNavigate();
  const { isLogged } = useTypedSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <ErrorBoundary text={t('errors.default')}>
      <Box className={styles['welcome-wrapper']}>
        {!isLogged && (
          <Box className={styles['btns-wrapper']}>
            <Button
              onClick={() => navigate(RoutePath.SignIn)}
              variant="contained"
              size="large"
              className={`${styles.btn} ${styles.override}`}
            >
              {t('welcome_page.sin_btn')}
            </Button>
          </Box>
        )}
        <Typography
          variant="h1"
          sx={{
            '@media (max-width: 800px)': { fontSize: '62px' },
            '@media (max-width: 550px)': { fontSize: '52px' },
            '@media (max-width: 440px)': { fontSize: '34px' },
          }}
        >
          Project manager
        </Typography>
        <Box className={styles['info-wrapper']}>
          <Typography paragraph fontSize={22} className={styles['info-text']}>
            {t('welcome_page.about')}
          </Typography>
          <img src={picture} alt="main picture" />
        </Box>
        <Box>
          <Typography variant="h2" align="center">
            {t('welcome_page.team')}
          </Typography>
          <Container maxWidth="lg" className={styles.container}>
            <Box className={styles['member-wrapper']}>
              <Box className={styles['member']}>
                <Avatar
                  src={require(`../../assets/images/${developer.photo}`)}
                  alt="person avatar"
                  className={`${styles['member-avatar']} ${styles.override}`}
                />
                <Box className={styles['member-info']}>
                  <a target="_blank" href={developer.github} rel="noreferrer">
                    <GitHubIcon
                      fontSize="large"
                      sx={{
                        color: (theme) => theme.typography.body1.color,
                        '&:hover': {
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                      className={styles.git_logo}
                    />
                  </a>
                  <Typography
                    variant="h6"
                    align="center"
                    fontSize={34}
                    sx={{ '@media (max-width: 500px)': { fontSize: '26px' } }}
                  >
                    {developer.name}
                  </Typography>
                  <Typography paragraph align="center" fontSize={18}>
                    {t(`welcome_page.info`)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};

export default Home;
