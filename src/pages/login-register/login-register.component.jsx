import React from 'react';

import Login from '../../components/login/login.components';
import Register from '../../components/register/register.component';

import './login-register.style.scss';

const LoginRegisterPage = () => {
   return (
      <div className='login-register'>
         <Login />
         <Register />
      </div>
   );
};

export default LoginRegisterPage;
