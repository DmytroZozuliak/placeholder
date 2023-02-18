import { Avatar, IconButton, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './style.module.scss';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormValues } from '../../interfaces/formInterfaces';
import { useTypedDispatch } from '../../hooks/redux';
import { logIn } from '../../store/reducers/userSlice';
import { useTranslation } from 'react-i18next';
import { openSuccessSnack, openErrorSnack } from '../../store/reducers/snackSlice';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { RoutePath } from '../../utils/constants/routes';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationSchema } from '../../hooks/useValidationSchema';
import { mockFormData } from '../../utils/constants/auth';

const AuthenticationForm = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = useValidationSchema();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<FormValues> = ({ username, password }) => {
    if (username !== mockFormData.username || password !== mockFormData.password) {
      dispatch(openErrorSnack(t('snack_message.failed_user')));
      return;
    }

    dispatch(logIn({ name: username }));
    dispatch(openSuccessSnack(t('snack_message.success_user')));
    navigate(RoutePath.Profile, { replace: true });
  };

  return (
    <form className={styles.boxWrapper} onSubmit={handleSubmit(onSubmit)}>
      <Avatar alt="auth-logo" color="primary" className={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography fontSize={26} variant="h5" className={styles['mr-bot']}>
        {t('forms.auth.title_sin')}
      </Typography>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className={styles.input}
            classes={{
              root: styles.label,
            }}
            label={t('forms.auth.username')}
            error={Boolean(errors.username?.message)}
            helperText={errors.username?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className={styles.input}
            classes={{
              root: styles.label,
            }}
            autoComplete="on"
            type={showPassword ? 'text' : 'password'}
            label={t(`forms.auth.password`)}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
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
        )}
      />
      <Box className={`${styles.boxWrapper} ${styles.buttonsWrapper}`}>
        <LoadingButton
          type="submit"
          className={`${styles.button} ${styles.override}`}
          variant="contained"
        >
          {t('buttons.submit')}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default AuthenticationForm;
