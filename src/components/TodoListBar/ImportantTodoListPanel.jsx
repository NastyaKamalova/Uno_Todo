import { useSelector } from "react-redux";
import styled from "styled-components";
import EmptyBox from "../Comon/EmptyBox";
import Todo from "./TodoListPanel/Todo";
import { useContext } from "react";
import AppContext from "../../context/context";

const ImportantTodoListPanel = () => {
    const { mode } = useContext(AppContext);
    const lists = useSelector(state => state.data);
    const allTodos = lists.map(list => list.todos).flat(1);
    const importantTodos = allTodos.filter(todo => todo.important);

    return(
        <StyledImportantList $isDark={mode === "Dark"}>
            <StyledTitle>Important</StyledTitle>
            {
                importantTodos.length ? (
                    <ul>
                        {
                            importantTodos.map(todo => (
                                <Todo key={todo.id} todo={todo}/>
                            ))
                        }
                    </ul>
                ) : (
                    <EmptyBox variant={'important'}/>
                )
            }
        </StyledImportantList>
    )
}
export default ImportantTodoListPanel

const StyledImportantList = styled.div`
    background: ${props => props.$isDark ? `var(--light-red-dark-theme)` : `var(--light-red)`};
    width: 100%;
    padding: 20px;
`
const StyledTitle = styled.div`
    color: var(--white);
    width: 100%;
    font-family: Roboto;
    font-size: 22px;
    padding: 12px 0px;
`