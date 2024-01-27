import ModalsWrapper from "./Common/Modals/ModalsWrapper";
import SideBar from "./SideBar";
import TodoListBar from "./TodoListBar";
import { styled } from "styled-components";

const TodoApp = () => {
  return (
      <StyledAppContainer>
        <SideBar/>
        <TodoListBar/>
        <ModalsWrapper/>
      </StyledAppContainer>
  )
}

export default TodoApp;

const StyledAppContainer = styled.main`
  min-height: 100vh;
  display:flex;
`;