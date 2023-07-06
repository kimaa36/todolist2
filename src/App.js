import './App.css';
import { Header } from 'components/Header';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import { styled } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Header />
      <TodoEditor />
      <TodoList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default App;
