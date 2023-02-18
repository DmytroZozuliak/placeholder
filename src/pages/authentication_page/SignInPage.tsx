import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../../components/AuthenticationForm';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useTypedSelector } from '../../hooks/redux';
import { RoutePath } from '../../utils/constants/routes';
import styles from './style.module.scss';

const SignInPage = () => {
  const { isLogged } = useTypedSelector((state) => state.user);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isLogged) {
      navigate(RoutePath.News);
    }
  }, []);

  return (
    <ErrorBoundary text={t('errors.default')}>
      <Container maxWidth="sm" className={styles.authContainer}>
        <AuthenticationForm />
      </Container>
    </ErrorBoundary>
  );
};

export default SignInPage;
