import React from 'react'
import { styled } from 'styled-components';

const TodoItem = () => {
  return (
    <TodoItemWrapper>
      <CheckBox>
        <input type="checkbox" />
      </CheckBox>
      <Title>할 일</Title>
      <ToDate>{new Date().toDateString()}</ToDate>
      <RemoveBtn>삭제</RemoveBtn>
    </TodoItemWrapper>
  )
}

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
`;

const Title = styled.div`
  flex: 1;
`;

const ToDate = styled.div`
  font-size: 14px;
  color: gray;
`;

const RemoveBtn = styled.button`
  cursor: pointer;
  color: gray;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

export default TodoItem