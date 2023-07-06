import React from 'react'
import { styled } from 'styled-components';

const TodoEditor = () => {
  return (
    <>
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <EditWrapper>
        <input type="text" placeholder='새로운 Todo...' />
        <InsertBtn>추가</InsertBtn>
      </EditWrapper>
    </>
  )
}

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input{
    flex: 1;
    box-sizing: border-box;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    padding: 15px;
  }
  input:focus{
    outline: none;
    border: 1px solid #de4e40;
  }
`;

const InsertBtn = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  background: #de4e40;
  color: #fff;
  border-radius: 5px;
`;

export default TodoEditor