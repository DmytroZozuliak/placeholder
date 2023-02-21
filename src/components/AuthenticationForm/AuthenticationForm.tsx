import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Stack, TextField, Typography } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues } from '../../interfaces/formInterfaces';
import { useTypedDispatch } from '../../hooks/redux';
import { userActions } from '../../store/reducers/userSlice';
import { useTranslation } from 'react-i18next';
import { snackActions } from '../../store/reducers/snackSlice';
import { RoutePath } from '../../utils/constants/routes';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
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
      dispatch(snackActions.openErrorSnack(t('snack_message.failed_user')));
      return;
    }

    dispatch(userActions.logIn({ name: username }));
    dispatch(snackActions.openSuccessSnack(t('snack_message.success_user')));
    navigate(RoutePath.Profile, { replace: true });
  };

  return (
    <Stack
      component="form"
      justifyContent="space-between"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Avatar
        alt="auth-logo"
        color="primary"
        sx={{ backgroundColor: 'rgb(185, 172, 190)', my: '10px' }}
      >
        <LockOutlinedIcon />
      </Avatar>
      <Typography fontSize={26} variant="h5" mb={5}>
        {t('forms.auth.title_sin')}
      </Typography>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            sx={{ mb: '10px', minHeight: '80px' }}
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
            fullWidth
            sx={{ mb: '10px', minHeight: '80px' }}
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
      <LoadingButton type="submit" sx={{ mt: 2, px: 5, fontSize: '18px' }} variant="contained">
        {t('buttons.submit')}
      </LoadingButton>
    </Stack>
  );
};

export default AuthenticationForm;
