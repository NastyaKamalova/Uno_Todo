import { useDispatch } from "react-redux";
import { changeNoteTodo } from "../../../store/actionCreators/dataActionCreators";
import styled from "styled-components";
import { useContext } from "react";
import AppContext from "../../../context/context";

const NoteSetting = ({note, listId, todoId}) => {
    const { mode } = useContext(AppContext);
    const dispatch = useDispatch();  
    const changeHandler = (e) => {
        dispatch(changeNoteTodo({listId, todoId, note: e.target.value}))
    }
    return (
        <div>
            <StyledLabel $isDark={mode === "Dark"} >Note</StyledLabel>
            <StyledNote  placeholder="Add Note" $isDark={mode === "Dark"} value={note} onChange={changeHandler}>
                {note}
            </StyledNote>
        </div>
    )
}
export default NoteSetting

const StyledNote = styled.textarea`
    width: 100%;
    min-height: 250px;
    border: none;
    font-family: Roboto;
    font-size: 16px;
    ${props => props.$isDark && `
        background: var(--black);
        color: var(--white-dark-theme);
    `}
`
const StyledLabel = styled.label`
    font-family: Roboto;
    font-size: 12px;
    ${props => props.$isDark && `color: var(--white-dark-theme)`};
`