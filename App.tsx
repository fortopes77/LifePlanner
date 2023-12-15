import React from 'react';
import {Text, View} from 'react-native';
import SignIn from './src/components/sign-in/sign-in';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SignIn />
    </View>
  );
};
export default HelloWorldApp;