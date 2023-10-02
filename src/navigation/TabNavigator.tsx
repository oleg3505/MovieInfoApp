import {observer} from 'mobx-react-lite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EmptyScreen} from '../screens/EmptyScreen';
import {screens} from './screens';
import React from 'react';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = observer(() => (
  <BottomTabNavigator.Navigator>
    <BottomTabNavigator.Screen name={screens.Profile} component={EmptyScreen} />
    <BottomTabNavigator.Screen name={screens.Profile} component={EmptyScreen} />
    <BottomTabNavigator.Screen name={screens.Profile} component={EmptyScreen} />
  </BottomTabNavigator.Navigator>
));
