import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";
import EmptyBox from "../../Comon/EmptyBox";

const TodoList = () => {
    const lists = useSelector(state => state.data);
    const activeListId = useSelector(state => state.todoList.activeList);
    const list = lists.find(iter => iter.id === activeListId);
    const isCompleted = useSelector(state => state.todoList.showingCompleted);
    const listTodos = isCompleted ? list.todos.filter(iter => iter.completed) : list.todos

    return (
        <StyledList>
            <ul>
                { isCompleted && !listTodos.length && <EmptyBox variant={'completed'}/>}
                {
                    listTodos.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))
                }
            </ul>
        </StyledList>
    )
}
export default TodoList

const StyledList = styled.div`
    padding: 10px 0px;
`