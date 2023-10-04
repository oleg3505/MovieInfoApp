import mirror from 'mirror-to-object-pairs';

export const screens = mirror([
  // Screens
  'Welcome',

  'SignIn',
  'SignUp',
  'Search',
  'Profile',
  'Home',
  'Saved',

  // Navigators
  'AuthNavigator',
  'MainNavigator',
  'TabNavigator',
  'ProfileNavigator',
]);

export type ScreensType = typeof screens;
export type ScreensNameType = keyof ScreensType;
