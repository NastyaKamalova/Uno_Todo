import { useSelector } from "react-redux";
import styled from "styled-components";
import EmptyBox from "../Comon/EmptyBox";
import Todo from "./TodoListPanel/Todo";
import { useContext } from "react";
import AppContext from "../../context/context";

const SeacrhTodoListPanel = () => {
    const lists = useSelector(state => state.data);
    const searchString = useSelector(state => state.todoList.search);
    const allTodos = lists.map(list => list.todos).flat(1);
    const SearchedTodos = allTodos.filter(todo => todo.title.includes(searchString));
    const { mode } = useContext(AppContext);
    
    return(
        <StyledSeacrhTodoListPanel $isDark={mode === "Dark"}>
            <StyledTitle $isDark={mode === "Dark"}>Search</StyledTitle>
            {
                SearchedTodos.length ? (
                    <ul>
                        {
                            SearchedTodos.map(todo => (
                                <Todo key={todo.id} todo={todo}/>
                            ))
                        }
                    </ul>
                ) : (
                    <EmptyBox variant={'search'}/>
                )
            }
        </StyledSeacrhTodoListPanel>
    )
}
export default SeacrhTodoListPanel

const StyledSeacrhTodoListPanel = styled.div`
    background: ${props => props.$isDark ? `var(--search-panel-dark)` : `var(--search-gray)`};
    width: 100%;
    padding: 20px;
`
const StyledTitle = styled.div`
    color: ${props => props.$isDark ? `var(--gray-dark-theme)` : `var(--black)`};
    width: 100%;
    font-family: Roboto;
    font-size: 22px;
    padding: 12px 0px;
`