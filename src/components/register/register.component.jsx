import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.style.scss';

class Register extends Component {
   constructor() {
      super();

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      };
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         alert("Passwords don't match!");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
         );

         createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
         });
      } catch (error) {
         console.error(error);
      }
   };

   handleChange = (e) => {
      const { value, name } = e.target;

      this.setState({ [name]: value });
   };

   render() {
      const { displayName, email, password, confirmPassword } = this.state;

      return (
         <div className='register'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit} className='register-form'>
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='Display Name'
                  required
               />
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email Address'
                  required
               />
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  label='Password'
                  required
               />
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label='Confirm Password'
                  required
               />
               <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
         </div>
      );
   }
}

export default Register;
