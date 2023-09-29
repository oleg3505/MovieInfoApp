import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';

import {screens} from './screens';
import {AuthNavigator} from './AuthNavigator';
// import {MainNavigator} from './MainNavigator';
import type {AppStackParamListType} from './types';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createNativeStackNavigator<AppStackParamListType>();

// TODO: add auth logic

export const AppNavigator = observer(() => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          // since it's switch navigator
          // we render only what we need
          headerShown: false,
          animation: 'none',
        }}>
        {/* {true && (
          <AppStack.Screen
            component={MainNavigator}
            name={screens.MainNavigator}
          />
        )} */}
        {true && (
          <AppStack.Screen
            component={AuthNavigator}
            name={screens.AuthNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
});
