import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {LoginScreen, WelcomeScreen} from '../screens';
import {EmptyScreen} from '../screens/EmptyScreen';
import {screens} from './screens';
import {AuthStackParamListType} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamListType>();

export const AuthNavigator = observer(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={screens.Welcome}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={WelcomeScreen} name={screens.Welcome} />
      <AuthStack.Screen
        component={LoginScreen}
        name={screens.SignIn}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        component={EmptyScreen}
        name={screens.SignUp}
        options={{headerShown: true}}
      />
    </AuthStack.Navigator>
  );
});
