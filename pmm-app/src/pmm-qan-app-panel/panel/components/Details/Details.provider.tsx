import React, { useState } from 'react';
import { Details } from './Details.types';

const initialState = { detailsState: { tables: [] } } as Details;

export const DetailsProvider = React.createContext(initialState);

const actions = {
  setFoundData: (value) => (state) => {
    const newState = {
      ...state,
      ...value
    };
    return newState;
  },
};

export const DetailsContentProvider = ({ children }) => {
  const [detailsState, setContext] = useState({ tables: [] });
  const wrapAction = (key) => (value) => setContext(actions[key](value));

  return (
    <DetailsProvider.Provider
      value={{
        detailsState,
        contextActions: Object.keys(actions).reduce((actions, key) => {
          // eslint-disable-next-line no-param-reassign
          actions[key] = wrapAction(key);
          return actions;
        }, {}),
      }}
    >
      {children}
    </DetailsProvider.Provider>
  );
};
