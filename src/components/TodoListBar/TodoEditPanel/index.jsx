import { useSelector } from "react-redux";
import MainTodoSettings from "./MainTodoSettings";
import DataSettings from "./DateSettings";
import NoteSetting from "./NoteSetting";
import RestSettings from "./RestSettings";
import styled from "styled-components";
import Divider from "../../../ui/Divider";
import { useContext } from "react";
import AppContext from "../../../context/context";

const TodoEditPanel = () => {
    const { mode } = useContext(AppContext);
    const lists = useSelector(state => state.data);
    const todoId = useSelector(state => state.todoPanel.activeTodo.todoId);
    const listId = useSelector(state => state.todoPanel.activeTodo.listId);
    const todos = lists.find(iter => iter.id === listId).todos;
    const todo = todos.find(iter => iter.id === todoId);

    return (
        <StyledTodoEditPanel $isDark={mode === "Dark"}>
            <div>
                <MainTodoSettings 
                    isImportant={todo.important} 
                    isCompleted={todo.completed} 
                    title={todo.title} 
                    todoId={todoId}
                    listId={listId}
                />
                <StyledBox>
                    <Divider/>
                    <DataSettings 
                        deadline={todo.deadlineDate}
                        todoId={todoId}
                        listId={listId}
                    />
                    <Divider/>
                    <NoteSetting 
                        note={todo.note}
                        todoId={todoId}
                        listId={listId}
                    />
                    <Divider/>
                </StyledBox>
            </div>
            <div>
                <RestSettings createDate={todo.createDate} todoId={todo.id}/>
            </div>
        </StyledTodoEditPanel>
    )
}
export default TodoEditPanel

const StyledTodoEditPanel = styled.div`
    background: ${props => props.$isDark ? `var(--black)` : `var(--white)`};
    padding: 30px 10px 20px 10px;
    width: 33.33%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const StyledBox = styled.div`
    padding: 0px 10px;
`