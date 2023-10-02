import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {PressableButton} from '../../../components';
import {screens} from '../../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

export function WelcomeScreen() {
  const {navigate} = useNavigation();

  function goToSignIn() {
    // @ts-ignore
    navigate(screens.SignIn);
  }

  function goToSignUp() {
    // @ts-ignore
    navigate(screens.SignUp);
  }
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 3,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 32,
          }}>
          Welcome there
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <PressableButton
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#a881af' : '#80669d',
            },
            {
              width: 200,
              paddingVertical: 12,
              marginBottom: 24,
              borderRadius: 6,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          textStyle={{fontSize: 18, color: 'white'}}
          title="Sign In"
          onPress={goToSignIn}
        />
        <View>
          <Text style={{alignSelf: 'center'}}>Don't have account?</Text>
          <PressableButton
            style={() => [
              {
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            textStyle={{
              color: '#80669d',
            }}
            title="Sign Up"
            onPress={goToSignUp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
