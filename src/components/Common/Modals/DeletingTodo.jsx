import { useDispatch, useSelector } from "react-redux";
import { toggleDeletingTodo } from "../../../store/actionCreators/todoPanelActionCreators"
import Modal from "../../../ui/Modal";
import { deleteTodoAndCloseModal } from "../../../store/actionCreators/thunks";
import styled from "styled-components";
import AppContext from "../../../context/context";
import { useContext } from "react";

const DeletingTodo = () => {
    const dispatch = useDispatch();
    const listId = useSelector(state => state.todoPanel.activeTodo.listId);
    const todoId = useSelector(state => state.todoPanel.activeTodo.todoId);
    const { mode } = useContext(AppContext);
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleDeletingTodo({delitingTask: false}))
        }, 
        {
            variant: "delete",
            text: "Delete",
            clickHandler: () => dispatch(deleteTodoAndCloseModal({listId, todoId}))
        }
    ]
    return(
        <Modal
            header={'Are you sure?'}
            buttons={buttons}
        >
            <StyledText $isDark={mode === "Dark"}>Task will be permanently deleted</StyledText>
        </Modal>
    )
}
export default DeletingTodo

const StyledText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${props => props.$isDark ? `var(--transparent-gray)` : `var(--light-gray)`};
    margin: 16px 0px 20px 0px;
`

