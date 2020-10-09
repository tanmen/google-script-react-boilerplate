import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {reducers} from 'reducers';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const isProfiling = process.argv.includes('--profile') || process.env.NODE_ENV !== 'production';

export const ReduxProvider: FC = ({children}) =>
  <Provider store={store}>
    {children}
  </Provider>;

const store = createStore(reducers,
  isProfiling ? composeWithDevTools() : undefined);
