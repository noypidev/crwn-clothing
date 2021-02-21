import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWIthGoogle } from '../../firebase/firebase.utils';

import './login.style.scss';

class Login extends Component {
   constructor() {
      super();

      this.state = {
         email: '',
         password: '',
      };
   }

   handleSubmit = (e) => {
      e.preventDefault();

      this.setState({ email: '', password: '' });
   };

   handleChange = (e) => {
      const { value, name } = e.target;

      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className='login'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={this.handleSubmit}>
               <FormInput
                  required
                  id='email'
                  type='email'
                  name='email'
                  label='Email Address'
                  value={this.state.email}
                  handleChange={this.handleChange}
               />
               <FormInput
                  required
                  id='password'
                  type='password'
                  name='password'
                  label='Password'
                  value={this.state.password}
                  handleChange={this.handleChange}
               />
               <div className='buttons'>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton
                     onClick={signInWIthGoogle}
                     whichProvider='google'
                  >
                     Sign In with Google
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

export default Login;
