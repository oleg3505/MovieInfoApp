import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PressableButton} from '../../components';
import {useAuthModel} from '../../stores/AuthModel';

const s = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
});

export const ProfileScreen = observer(() => {
  const auth = useAuthModel();
  console.log(auth.user);

  async function loguot() {
    auth.signOut.run();
  }
  return (
    <View style={s.root}>
      <View>
        <Text>test</Text>
        <Text>{auth.user?.name}</Text>
      </View>
      <PressableButton
        title="Loguot"
        onPress={() => {
          console.log(1111);
          loguot();
        }}
      />
    </View>
  );
});
