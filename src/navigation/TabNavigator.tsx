import {observer} from 'mobx-react-lite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EmptyScreen} from '../screens/EmptyScreen';
import {screens} from './screens';
import React from 'react';
import {
  BookmarkIcon,
  BookmarkIconFilled,
  HomeIcon,
  HomeIconFilled,
  ProfileIcon,
  ProfileIconFilled,
} from '../components/svg/icons';
import {ProfileScreen} from '../screens/Profile/ProfileScreen';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = observer(() => (
  <BottomTabNavigator.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused}) => {
        if (route.name === screens.Home) {
          return focused ? (
            <HomeIconFilled color={color} />
          ) : (
            <HomeIcon color={color} />
          );
        } else if (route.name === screens.Saved) {
          return focused ? (
            <BookmarkIconFilled color={color} />
          ) : (
            <BookmarkIcon color={color} />
          );
        }
        return focused ? (
          <ProfileIconFilled color={color} />
        ) : (
          <ProfileIcon color={color} />
        );
      },
      tabBarActiveTintColor: '#80669d',
      tabBarInactiveTintColor: 'black',
    })}>
    <BottomTabNavigator.Screen name={screens.Home} component={EmptyScreen} />
    <BottomTabNavigator.Screen name={screens.Saved} component={EmptyScreen} />
    <BottomTabNavigator.Screen
      name={screens.Profile}
      component={ProfileScreen}
    />
  </BottomTabNavigator.Navigator>
));
