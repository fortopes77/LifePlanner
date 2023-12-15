import React, { FC } from 'react';
import { SignInWrapper } from './sign-in.styled';
import {Text, View} from 'react-native';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
   return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
      />
    </div>
   );
 };

export default SignIn;
