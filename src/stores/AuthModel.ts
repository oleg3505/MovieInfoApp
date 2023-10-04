import {getRoot, types} from 'mobx-state-tree';
import {createThunk, model, Model} from 'mst-collection';
import {useRoot} from './RootModel';
import {UserModel} from './UserModel';

export class Auth extends Model({
  isAuthorized: types.maybeNull(types.boolean),
  user: types.optional(UserModel, {}),
}) {
  authorize() {
    this.isAuthorized = true;
  }

  unauthorize() {
    this.isAuthorized = false;
  }

  signIn = createThunk(({...params}: any) => {
    return async function signIn(this: Auth) {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(params),
      }).then(res => res.json());
      console.log('store res', res);

      if (res?.data?.token) {
        this.authorize();

        if (res.data.user) {
          this.user?.setUser(res.data.user);
        }
      }
    };
  });

  signOut = createThunk(() => {
    return async function signOut(this: Auth) {
      this.unauthorize;
      this.user?.clearUser();
      // @ts-ignore
      getRoot(this).reset();
    };
  });
}

export const AuthModel = model(Auth);

export function useAuthModel() {
  const root = useRoot();

  return root.auth;
}
