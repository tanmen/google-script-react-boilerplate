import {Providers} from 'containers/providers';
import React from 'react';
import {Routes} from 'routes/route';

export const App = () =>
  <Providers>
    <Routes/>
  </Providers>;
