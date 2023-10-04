import {NavigatorScreenParams} from '@react-navigation/native';

import {screens} from './screens';

export type AppStackParamListType = {
  [screens.AuthNavigator]: NavigatorScreenParams<AuthStackParamListType>;
  [screens.TabNavigator]: NavigatorScreenParams<TabStackParamListType>;
};

export type AuthStackParamListType = {
  [screens.SignIn]: undefined;
  [screens.SignUp]: undefined;
  [screens.Welcome]: undefined;
};

export type TabStackParamListType = {
  [screens.Home]: undefined;
  [screens.Profile]: undefined;
  [screens.Saved]: undefined;
};
