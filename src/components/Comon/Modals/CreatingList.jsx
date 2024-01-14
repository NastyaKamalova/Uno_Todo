import { useDispatch } from "react-redux";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import { toggleCreatingList } from "../../../store/actionCreators/todoListActionCreators";
import InputText from "../../../ui/InputText";
import { addListAndCloseModal } from "../../../store/actionCreators/thunks";

const CreatingList = () => {
    const dispatch = useDispatch();
    const [checkFlag, setCheckFlag] = useState(false);
    const [title, setTitle] = useState('');
    const addHandler = () => {
        if (title) dispatch(addListAndCloseModal ({title}))
        setCheckFlag(true);
    }
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleCreatingList())
        }, 
        {
            variant: "plus",
            text: "Create",
            clickHandler: addHandler
        }
    ]
    return (
        <Modal header={'New List'} buttons={buttons}>
            <InputText 
                checkEmpty={checkFlag}
                value={title} 
                changeHandler={setTitle} 
                placeholder={'Enter list title'}
            />
        </Modal>
    )
}
export default CreatingList