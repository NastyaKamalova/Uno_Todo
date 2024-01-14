import { useDispatch, useSelector } from "react-redux";
import { switchCompletedList } from "../../../store/actionCreators/todoListActionCreators";
import styled from "styled-components"
import AppContext from "../../../context/context";
import { useContext } from "react";

const ListSwitcher = () => {
    const dispatch = useDispatch();
    const isCompleted = useSelector (state => state.todoList.showingCompleted)
    const { mode } = useContext(AppContext);
    return(
        <StyledListSwicher $isDark={mode === "Dark"}>
             <StyledListSwicherItem
                $isDark={mode === "Dark"}
                onClick={() => {dispatch(switchCompletedList({completed:false}))}}
                $isActive={!isCompleted}
            >
                To Do
            </StyledListSwicherItem>
            <StyledListSwicherItem 
                $isDark={mode === "Dark"}
                onClick = {() => {dispatch(switchCompletedList({completed:true}))}}
                $isActive={isCompleted}
            >
                Completed
            </StyledListSwicherItem>
        </StyledListSwicher>
    )
}
export default ListSwitcher

const StyledListSwicher = styled.div`
    display: flex;
    border-bottom: ${props => props.$isDark ? `2px solid var(--blue)` : `2px solid var(--light-purple)`};
    width: max-content;
`
const StyledListSwicherItem = styled.div`
    color: ${props => props.$isDark ? `var(--transparent-gray)` : `var(--light-gray)`};
    padding: 15px 55px;
    font-family: Roboto;
    font-size: 14px;
    cursor: pointer;
    ${props => props.$isActive && !props.$isDark && `
        color: var(--blue); 
        border-bottom: 2px solid var(--blue);
    `}
    ${props => props.$isActive && props.$isDark && `
        color: var(--purple-dark-theme); 
        border-bottom: 2px solid var(--purple-dark-theme);
    `}
`

