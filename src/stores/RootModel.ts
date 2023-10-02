import {applySnapshot, Instance} from 'mobx-state-tree';
import {model, RootModel as BaseRootModel} from 'mst-collection';
import React, {useContext} from 'react';
import {AuthModel} from './AuthModel';

export class Root extends BaseRootModel({
  auth: AuthModel,
  // viewer: ViewerModel,
  // movies: MoviesModel,
}) {
  reset() {
    applySnapshot(this, {});
  }
}

export const RootModel = model(Root);

export type RootModelType = typeof RootModel;

const RootModelContext = React.createContext<Instance<RootModelType> | null>(
  null,
);

export const RootModelProvider = RootModelContext.Provider;

/**
 * Hook which returns root model
 */
export function useRoot(): Instance<RootModelType> {
  const store = useContext(RootModelContext);

  return store as Instance<RootModelType>;
}
