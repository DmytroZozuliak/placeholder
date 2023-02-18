import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { stringAvatar } from '../../../../utils/functions';
import { useTypedDispatch, useTypedSelector } from '../../../../hooks/redux';
import { logOut } from '../../../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../utils/constants/routes';

const AuthLogo = () => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { userName, isLogged } = useTypedSelector((state) => state.user);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t('header.userSettings')}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>{userName && stringAvatar(userName)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appBar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={() => {
            dispatch(logOut());
            navigate(RoutePath.Home);
            handleCloseUserMenu();
          }}
        >
          <LogoutIcon fontSize="small" />
          <Typography
            sx={{
              marginLeft: 2,
            }}
            textAlign="center"
          >
            {t('header.logOutProfile')}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AuthLogo;