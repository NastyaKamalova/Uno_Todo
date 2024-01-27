import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../ui/Modal";
import { toggleRenaimingList } from "../../../store/actionCreators/todoListActionCreators";
import InputText from "../../../ui/InputText";
import { renameListAndCloseModal } from "../../../store/actionCreators/thunks";

const RenamingList = () => {
    const dispatch = useDispatch();
    const [checkFlag, setCheckFlag] = useState(false);
    const listId = useSelector(state => state.todoList.activeList);
    const lists = useSelector(state => state.data);
    const listTitle = lists.find((iter) => iter.id === listId).title;
    const [title, setTitle] = useState(listTitle);

    const addHandler = () => {
        if (title) dispatch(renameListAndCloseModal({listId, title}))
        setCheckFlag(true);
    }
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleRenaimingList())
        }, 
        {
            variant: "default",
            text: "Rename",
            clickHandler: addHandler
        }
    ]
    return(
        <Modal header={'Rename list'} buttons={buttons}>
            <InputText 
                checkEmpty={checkFlag}
                value={title} 
                changeHandler={setTitle} 
                placeholder={'Rename list'}/>
        </Modal>
    )
}
export default RenamingList