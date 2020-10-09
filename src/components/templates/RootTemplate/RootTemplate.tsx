import styled from '@emotion/styled';
import {Todo} from 'models/todo';
import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import {Paths} from 'routes/paths';
import {useHistory} from 'routes/router';

export const RootTemplate: FC<{ create: (todo: Omit<Todo, 'id'>) => unknown }> = ({create}) => {
  const history = useHistory();
  const createTodo = (e: KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      create({title: e.target.value});
      history.push(Paths.List.path());
    }
  };

  return (
    <Base>
      <Header>
        <Title>
          What are you doing today?
        </Title>
        <Input type="text" placeholder="Jogging" onKeyPress={createTodo}/>
      </Header>
    </Base>
  );
};

const Base = styled.div`
text-align: center;
`;

const Header = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Title = styled.p`
margin-bottom: 0.5em;
`;

const Input = styled.input`
font-size: 1em;
width: 15em;
`
