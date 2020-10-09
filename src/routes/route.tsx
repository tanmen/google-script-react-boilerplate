import {ListPage, RootPage} from 'containers/pages';
import React, {FC} from 'react';
import {MemoryRouter, Route, Switch} from 'react-router-dom';
import {Paths} from 'routes/paths';

export const Routes: FC = () =>
  <MemoryRouter>
    <Switch>
      <Route path={Paths.List.template} component={ListPage}/>
      <Route strict path={Paths.Root.template} component={RootPage}/>
    </Switch>
  </MemoryRouter>;
