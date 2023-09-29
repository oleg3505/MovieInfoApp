import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {EmptyScreen} from '../screens/EmptyScreen';
import {screens} from './screens';
import {MainStackParamListType} from './types';

const MainStack = createNativeStackNavigator<MainStackParamListType>();

export const MainNavigator = observer(() => {
  return (
    <MainStack.Navigator
      initialRouteName={screens.TabNavigator}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen
        component={EmptyScreen}
        name={screens.ProfileNavigator}
      />
      <MainStack.Screen component={EmptyScreen} name={screens.TabNavigator} />
    </MainStack.Navigator>
  );
});
