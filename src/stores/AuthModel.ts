import {getRoot, types} from 'mobx-state-tree';
import {createThunk, model, Model} from 'mst-collection';
import {useRoot} from './RootModel';

export class Auth extends Model({
  /**
   * null means that status is not defined yet
   */
  isAuthorized: types.maybeNull(types.boolean),
  // signUpDraft: types.maybeNull(SignUpDraftModel),
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

        // await TokenService.set(res.data);
      }

      // const viewer = getRoot(this).viewer;

      // await viewer.fetch.run();
    };
  });

  signOut = createThunk(() => {
    return async function signOut(this: Auth) {
      this.unauthorize;
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
