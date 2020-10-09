import {ReduxProvider} from 'containers/providers/ReduxProvider';
import React, {FC} from 'react';

export const Providers: FC = ({children}) =>
  <ReduxProvider>
    {children}
  </ReduxProvider>;
