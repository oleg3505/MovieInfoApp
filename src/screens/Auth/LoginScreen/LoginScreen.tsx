import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PressableButton} from '../../../components';
import {screens} from '../../../navigation';
import {useAuthModel} from '../../../stores/AuthModel';

const s = StyleSheet.create({
  indicatorStyle: {paddingTop: 48},
  mainContainer: {flex: 1, padding: 24},
  textinput: {
    marginBottom: 24,
    backgroundColor: 'white',
    width: '100%',
    height: 36,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
  },

  errorText: {
    color: 'red',
    position: 'absolute',
    bottom: 8,
    paddingHorizontal: 8,
    fontSize: 12,
    lineHeight: 16,
  },
  submitButton: {
    width: 200,
    paddingVertical: 12,
    marginBottom: 24,
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {fontSize: 18, color: 'white'},
});

export const LoginScreen = observer(() => {
  const auth = useAuthModel();
  // const root = useRoot();

  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({});
  }, [nav]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: any) => {
    await auth.signIn.run(data);
    if (auth.isAuthorized) {
      console.log('we can navigate');
      // @ts-ignore
      nav.navigate(screens.TabNavigator);
    }
  };

  const isSigmInInProgress = auth.signIn.inProgress;

  return isSigmInInProgress ? (
    <ActivityIndicator size="large" style={s.indicatorStyle} />
  ) : (
    <View style={s.mainContainer}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={s.textinput}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={s.errorText}>This is required.</Text>}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={s.textinput}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={s.errorText}>This is required.</Text>}
      </View>

      <PressableButton
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#a881af' : '#80669d',
          },
          s.submitButton,
        ]}
        textStyle={s.buttonText}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
});
