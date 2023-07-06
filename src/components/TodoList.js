import React from 'react'
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <h4>Todo list 🌱</h4>
      <SearchBar type="text" placeholder='검색어를 입력하세요' />
      <ListWrapper>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ListWrapper>
    </div>
  )
}

const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  margin-bottom: 20px;
  &:focus{
    outline: none;
    border-bottom: 1px solid #de4e40;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default TodoList