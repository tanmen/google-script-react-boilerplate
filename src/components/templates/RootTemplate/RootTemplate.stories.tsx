import {action} from "@storybook/addon-actions";
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {RootTemplate} from './RootTemplate';

export default {
  title: 'RootTemplate',
  component: RootTemplate,
};

export const normal = () =>
  <MemoryRouter>
    <RootTemplate create={action('create')}/>
  </MemoryRouter>;
