import styled from '@emotion/styled';
import {Todo} from 'models/todo';
import React, {FC} from 'react';

export const ListTemplate: FC<{ todos: Todo[] }> = ({todos}) => <Body>
  {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
</Body>;

const Body = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;
