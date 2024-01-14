import { useDispatch, useSelector } from "react-redux";
import { toggleDeletingList } from "../../../store/actionCreators/todoListActionCreators"
import Modal from "../../../ui/Modal";
import { deleteListAndCloseModal } from "../../../store/actionCreators/thunks";
import styled from "styled-components";
import AppContext from "../../../context/context";
import { useContext } from "react";

const DeletingList = () => {
    const dispatch = useDispatch();
    const listId = useSelector(state => state.todoList.activeList);
    const { mode } = useContext(AppContext);
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleDeletingList())
        }, 
        {
            variant: "delete",
            text: "Delete",
            clickHandler: () => dispatch(deleteListAndCloseModal({activeList: listId}))
        }
    ]
    return(
        <Modal
            header={'Are you sure?'}
            buttons={buttons}
        >
            <StyledText $isDark={mode === "Dark"}>List will be permanently deleted</StyledText>
        </Modal>
    )
}
export default DeletingList

const StyledText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${props => props.$isDark ? `var(--transparent-gray)` : `var(--light-gray)`};
    margin: 16px 0px 20px 0px;
`