import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import plusIconWhite from "../../../img/plusIconWhite.svg";
import AppContext from "../../../context/context";
import { useContext } from "react";

const AddTodo = () => {
    const dispatch = useDispatch();
    const { mode } = useContext(AppContext);
    return(
       <StyledButtonBox>
            <StyledAddButton 
                $isDark={mode === "Dark"}
                onClick={() => dispatch(toggleCreatingTodo())}
            >Add a task</StyledAddButton>
            <StyledButtonIcon src={plusIconWhite}/>
       </StyledButtonBox>
    )
}
export default AddTodo 

const StyledAddButton = styled. div`
    background: ${props => props.$isDark ? `var(--transparent-black)` : `var(--add-todo-button-color)`};
    border-radius: 20px;
    padding: 12px 40px;
    font-family: Roboto;
    font-size: 14px;
    color: var(--white);
    cursor: pointer;
`
const StyledButtonIcon = styled.img`
    position: absolute;
    left:16px;
    width: 18px;
    height: 18px;
    top: calc(50% - 9px);
`
const StyledButtonBox = styled.div`
    position: relative;
`