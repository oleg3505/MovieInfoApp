import {types} from 'mobx-state-tree';
import {model, Model} from 'mst-collection';
import {useRoot} from './RootModel';

export class User extends Model({
  email: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
}) {
  setUser({name, email}: {name: string; email: string}) {
    console.log('set user strt');

    this.email = email;
    this.name = name;

    console.log('set user end');
  }

  clearUser() {
    this.email = null;
    this.name = null;
  }
}

export const UserModel = model(User);

export function useUserModel() {
  const root = useRoot();

  return root.auth.user;
}
