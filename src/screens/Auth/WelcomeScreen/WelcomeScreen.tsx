import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {PressableButton} from '../../../components';
import {screens} from '../../../navigation';

export function WelcomeScreen() {
  const {navigate} = useNavigation();

  function goToSignIn() {
    navigate(screens.SignIn);
  }

  function goToSignUp() {
    navigate(screens.SignUp);
  }
  return (
    <View
      style={{flex: 1, backgroundColor: 'red', justifyContent: 'space-around'}}>
      <Text style={{alignSelf: 'center'}}>Welcome there </Text>
      <View>
        <PressableButton
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
          ]}
          title="Sign In"
          onPress={goToSignIn}
        />
        <Button title="Sign Up" onPress={goToSignUp} />
      </View>
    </View>
  );
}
