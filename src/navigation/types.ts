import {NavigatorScreenParams} from '@react-navigation/native';

import {screens} from './screens';

export type AppStackParamListType = {
  [screens.AuthNavigator]: NavigatorScreenParams<AuthStackParamListType>;
  [screens.MainNavigator]: NavigatorScreenParams<MainStackParamListType>;
};

export type AuthStackParamListType = {
  [screens.SignIn]: undefined;
  [screens.SignUp]: undefined;
  [screens.Welcome]: undefined;
};

export type MainStackParamListType = {
  [screens.TabNavigator]: undefined;
  [screens.ProfileNavigator]: undefined;
};
