import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {EmptyScreen} from '../screens/EmptyScreen';
import {screens} from './screens';
import {AuthStackParamListType} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamListType>();

export const AuthNavigator = observer(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={screens.Welcome}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={EmptyScreen} name={screens.Welcome} />
      <AuthStack.Screen component={EmptyScreen} name={screens.SignIn} />
      <AuthStack.Screen component={EmptyScreen} name={screens.SignUp} />
    </AuthStack.Navigator>
  );
});
