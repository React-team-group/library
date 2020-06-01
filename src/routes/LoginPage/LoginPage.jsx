import React from 'react';
import { LoginLayout } from '../../components/LoginForm';
import Typography from '@material-ui/core/Typography';

import { useStyleLoginPage } from './styles';

export const LoginPage = ({ auth }) => {
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
