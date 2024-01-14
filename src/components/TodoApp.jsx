
import ModalsWrapper from "./Comon/Modals/ModalsWrapper";
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
  display:flex;
`;