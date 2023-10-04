import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';

import {screens} from './screens';
import {AuthNavigator} from './AuthNavigator';
// import {MainNavigator} from './MainNavigator';
import type {AppStackParamListType} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './TabNavigator';
import {useAuthModel} from '../stores/AuthModel';

const AppStack = createNativeStackNavigator<AppStackParamListType>();

// TODO: add auth logic

export const AppNavigator = observer(() => {
  const auth = useAuthModel();
  const isAuthorized = auth.isAuthorized;
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          // since it's switch navigator
          // we render only what we need
          headerShown: false,
          animation: 'none',
        }}>
        {isAuthorized && (
          <AppStack.Screen
            component={TabNavigator}
            name={screens.TabNavigator}
          />
        )}
        {!isAuthorized && (
          <AppStack.Screen
            component={AuthNavigator}
            name={screens.AuthNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
});
