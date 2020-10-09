import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {RootTemplate} from './RootTemplate';

test('renders learn react link', () => {
  const mockCreate = jest.fn();
  const {getByText} = render(
    <MemoryRouter>
      <RootTemplate create={mockCreate}/>
    </MemoryRouter>
  );
  const element = getByText(/What are you doing today?/i);
  expect(element).toBeInTheDocument();
});
