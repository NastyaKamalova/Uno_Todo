import { useSelector } from "react-redux"
import AddTodo from "./AddTodo"
import ListEditPanel from "./ListEditPanel"
import ListSwitcher from "./ListSwitcher"
import TodoList from "./TodoList"
import styled from "styled-components"
import EmptyBox from "../../Common/EmptyBox"
import AppContext from "../../../context/context"
import { useContext } from "react"

const TodoListPanel = () => {
    const lists = useSelector(state => state.data);
    const activeListId = useSelector(state => state.todoList.activeList);
    const list = lists.find(iter => iter.id === activeListId);
    const { mode } = useContext(AppContext);
    return(
        <StyledTodoListPanel $isDark={mode === "Dark"}>
        {
            lists.length ? (
                <>
                    <div>
                        <ListEditPanel/>
                        {
                            list.todos.length ? (
                                <>
                                    <ListSwitcher/>
                                    <TodoList/>
                                </>
                            ) : <EmptyBox/>
                        }
                    </div>
                    <div><AddTodo/></div>
                </>
            ) : (
                <EmptyBox variant={'list'}/>
            )
        }
        </StyledTodoListPanel>
    )
}
export default TodoListPanel

const StyledTodoListPanel = styled.div`
    background: ${props => props.$isDark ? `var(--dark-blue)` : `var(--purple)`};
    width:100%;
    padding: 20px;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
`