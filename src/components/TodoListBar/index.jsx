import { useSelector } from "react-redux";
import ImportantTodoListPanel from "./ImportantTodoListPanel";
import SeacrhTodoListPanel from "./SeacrhTodoListPanel";
import TodoListPanel from "./TodoListPanel";
import TodoEditPanel from "./TodoEditPanel";
import styled from "styled-components";
import TasksPanel from "./TasksPanel";
const TodoListBar = () => {
  const isSeaching = useSelector(state => state.todoList.search);
  const isImportant = useSelector(state => state.todoList.showingImportant);
  const isShowingTodoPanel = useSelector(state => state.todoPanel.showingTodoPanel);
  const isShowingAllTasks = useSelector(state => state.todoList.showingAllTasks);

  return (
    <StyledTodoListbarContainer>
      {
        isSeaching ? <SeacrhTodoListPanel/>
          : isImportant ? <ImportantTodoListPanel/>
          : isShowingAllTasks ? <TasksPanel/>
          : <TodoListPanel/>
      }
      {isShowingTodoPanel && <TodoEditPanel/>}
    </StyledTodoListbarContainer>
  )
}

export default TodoListBar;

const StyledTodoListbarContainer = styled.div`
  display: flex;
  width: 100%;
`