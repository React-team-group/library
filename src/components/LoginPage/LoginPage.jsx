import React from 'react';
import { LoginLayout } from '../../routes/LoginForm';
import Typography from '@material-ui/core/Typography';

import { useStyleLoginPage } from './styles';

export const LoginPage = () => {
  const { container, title } = useStyleLoginPage();
  return (
    <div className={container}>
      <Typography className={title} variant="h6" noWrap>
        Login
      </Typography>

      <LoginLayout />
    </div>
  );
};
