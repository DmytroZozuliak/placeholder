import { Avatar, IconButton, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './style.module.scss';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IFromField, IInitialFormValues } from '../../interfaces/formInterfaces';
import { useTypedDispatch } from '../../hooks/redux';
import { logIn } from '../../store/reducers/userSlice';
import { useTranslation } from 'react-i18next';
import { openSuccessSnack } from '../../store/reducers/snackSlice';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { RoutePath } from '../../utils/constants/routes';

const AuthenticationForm: React.FC<IFromField> = ({ fields }) => {
  // const [createUser, { isLoading: createUserLoading }] = useCreateUserMutation();
  // const [signInUser, { isLoading }] = useSignInMutation({
  //   fixedCacheKey: 'user-data',
  // });
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  // const initialValues = fields.reduce<IInitialFormValues>((acc, item) => {
  //   acc[item] = '';
  //   return acc;
  // }, {});

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('clicked sign in');
    dispatch(logIn({ name: 'dima' }));
    navigate(RoutePath.Profile);
  };

  return (
    <form className={styles.boxWrapper} onSubmit={handleSubmit}>
      <Avatar alt="auth-logo" color="primary" className={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography fontSize={26} variant="h5" className={styles['mr-bot']}>
        {t('forms.auth.title_sin')}
      </Typography>
      {fields.map((item) => {
        if (item === 'password') {
          return (
            <TextField
              className={styles.input}
              classes={{
                root: styles.label,
              }}
              id={item}
              key={item}
              name={item}
              label={t(`forms.auth.${item}`)}
              autoComplete="on"
              type={showPassword ? 'text' : 'password'}
              // value={formik.values[item]}
              // onChange={formik.handleChange}
              // error={formik.touched[item] && Boolean(formik.errors[item])}
              // helperText={formik.touched[item] && formik.errors[item]}
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ position: 'absolute', right: '12px', top: '8px' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          );
        } else {
          return (
            <TextField
              className={styles.input}
              classes={{
                root: styles.label,
              }}
              id={item}
              name={item}
              label={t(`forms.auth.${item}`)}
              // value={formik.values[item]}
              // onChange={formik.handleChange}
              // error={formik.touched[item] && Boolean(formik.errors[item])}
              // helperText={formik.touched[item] && formik.errors[item]}
              key={item}
            />
          );
        }
      })}
      <Box className={`${styles.boxWrapper} ${styles.buttonsWrapper}`}>
        <LoadingButton
          type="submit"
          className={`${styles.button} ${styles.override}`}
          variant="contained"
        >
          {t('forms.auth.title_sin')}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default AuthenticationForm;
