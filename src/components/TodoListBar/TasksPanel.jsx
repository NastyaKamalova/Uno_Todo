import { useSelector } from "react-redux"
import styled from "styled-components"
import EmptyBox from "../Common/EmptyBox"
import Todo from "./TodoListPanel/Todo";
import { useContext } from "react";
import AppContext from "../../context/context";

const TasksPanel = () => {
    const lists = useSelector(state => state.data);
    const allTodos = lists.map(list => list.todos).flat(1);
    const { mode } = useContext(AppContext);
    return(
        <StyledTasksPanel  $isDark={mode === "Dark"}>
            <StyledTitle>Tasks</StyledTitle>
            {
                allTodos.length ? (
                    <ul>
                        {
                            allTodos.map(todo => (
                                <Todo key={todo.id} todo={todo}/>
                            ))
                        }
                    </ul>
                ) : (
                    <EmptyBox/>
                )
            }
        </StyledTasksPanel>
    )
}

export default TasksPanel

const StyledTasksPanel = styled.div`
    width: 100%;
    padding: 20px;
    background: ${props => props.$isDark ? `var(--dark-blue)` : `var(--purple)`};
`
const StyledTitle = styled.div`
    width: 100%;
    font-family: Roboto;
    font-size: 22px;
    padding: 12px 0px;
    color: var(--white);
`