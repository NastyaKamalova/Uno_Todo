import { useDispatch, useSelector } from "react-redux";
import { changeCompletedTodo, changeImportantTodo, changeTodoTitle } from "../../../store/actionCreators/dataActionCreators";
import { useContext, useEffect, useRef } from "react";
import { toggleEditingTitle } from "../../../store/actionCreators/todoPanelActionCreators";
import styled from "styled-components";
import Checkbox from "../../../ui/Checkbox";
import AppContext from "../../../context/context";

const MainTodoSettings = ({isImportant, isCompleted, title, todoId, listId}) => {
    const { mode } = useContext(AppContext);
    const isEditingTitle = useSelector(state => state.todoPanel.editingTitle)
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(
        () => {
            if (inputRef.current !== null) {
                inputRef.current.focus();
                inputRef.current.addEventListener(
                    'blur', 
                    () => dispatch(toggleEditingTitle({editingTitle: false}))
                )
            }
        }, [isEditingTitle]
    )
    return (
        <StyledBox $isDark={mode === "Dark"}>

            <Checkbox 
                active={isCompleted} 
                position={'left'} 
                variable={'completed'}
                clickHandler={() => dispatch(changeCompletedTodo({listId, todoId}))}
            />
            {
                isEditingTitle 
                    ? (
                        <StyledInput $isDark={mode === "Dark"}
                            ref={inputRef}
                            value={title} 
                            onChange={(e) => dispatch(changeTodoTitle({
                                listId, 
                                todoId, 
                                todoTitle: e.target.value
                            }))}
                        />
                    ) : (
                        <div onClick={() => dispatch(toggleEditingTitle({editingTitle: true}))}> 
                            {title} 
                        </div>
                    )
            }
            <Checkbox 
                active={isImportant} 
                position={'right'} 
                variable={'important'}
                clickHandler={() => dispatch(changeImportantTodo({listId, todoId}))}
            />
        </StyledBox>
    )
}
export default MainTodoSettings

const StyledBox = styled.div`
    position: relative;
    padding: 0px 60px;
    display: flex;
    width: calc(100% + 20px);
    font-family: Roboto;
    font-size: 22px;
    cursor: pointer;
    margin: 0 -10px;
    color:${props => props.$isDark ? `var(--white)` : `var(--black)`};
`
const StyledInput = styled.input`
    background:  ${props => props.$isDark ? `var(--black)` : `var(--white)`};
    border: none;
    font-family: Roboto;
    font-size: 22px;
    width: 100%;
    color:${props => props.$isDark ? `var(--white)` : `var(--black)`};
`