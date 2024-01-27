import { useDispatch, useSelector } from "react-redux";
import { toggleCreatingTodo } from "../../../store/actionCreators/todoListActionCreators";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import InputText from "../../../ui/InputText";
import { addTodoAndCloseModal } from "../../../store/actionCreators/thunks";

const CreatingTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [checkFlag, setCheckFlag] = useState(false);
    const listId = useSelector(state => state.todoList.activeList);

    const addHandler = () => {
        if (title) dispatch(addTodoAndCloseModal({todoTitle: title, listId}))
        setCheckFlag(true);
    }

    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleCreatingTodo())
        },
        {
            variant: "plus",
            text: "Add",
            clickHandler: addHandler
        }
    ]
    return(
        <Modal
            header={'Add a task'}
            buttons={buttons}
        >
            <InputText 
                checkEmpty={checkFlag}
                value={title} 
                changeHandler={setTitle} 
                placeholder={'Add a task'}
            />
        </Modal>
    )
}
export default CreatingTodo