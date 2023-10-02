/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './src/navigation/AppNavigator';
import {createServer} from 'miragejs';
import {createRootModel} from './src/stores/createRootModel';
import {RootModelProvider} from './src/stores/RootModel';

// @ts-ignore
if (window.server) {
  // @ts-ignore
  window.server.shutdown();
}
// @ts-ignore
window.server = createServer({
  routes() {
    this.get('/api/movies', () => {
      return {
        movies: [
          {id: 1, name: 'Inception', year: 2010},
          {id: 2, name: 'Interstellar', year: 2014},
          {id: 3, name: 'Dunkirk', year: 2017},
        ],
      };
    });
    this.post('/api/login', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      if (
        attrs.email === 'petro@gmail.com' &&
        attrs.password === 'super-password'
      ) {
        console.log('success');

        return {
          data: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0zMFQxMToyOTo1OC4zNTJaIiwidXBkYXRlZEF0IjoiMjAyMS0wNi0zMFQxMToyOTo1OC4zNTJaIiwiaWF0IjoxNjI1MDUyNTk4fQ.umeB2_FZR28ISofmzsIqshP36k4Lw3aFk7VUZxNXk7U',
          },
        };
      } else {
        console.log('error: [wrong credentials]');

        return {error: 'wrong credentials'};
      }
    });
  },
});

function App(): JSX.Element {
  const rootModel = createRootModel();

  return (
    <RootModelProvider value={rootModel.store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </RootModelProvider>
  );
}

export default App;
