import { useDispatch } from "react-redux";
import { toggleDeletingTodo} from "../../../store/actionCreators/todoPanelActionCreators";
import styled from "styled-components";
import chevron from "../../../img/chevron.svg";
import deleteIcon from "../../../img/deleteIcon.svg";
import { closeTodoPanelAndUnsetActiveTodo } from "../../../store/actionCreators/thunks";
import chevronDarkTheme from "../../../img/chevronButtonDarkTheme.svg";
import deleteDarkTheme from "../../../img/deleteDarkTheme.svg";
import AppContext from "../../../context/context";
import { useContext } from "react";

const RestSettings = ({createDate, todoId}) => {
    const { mode } = useContext(AppContext);
    const dispatch = useDispatch();  
    return (
        <StyledRestSettings>
            <StyledChevron 
                src={mode === "Dark" ? chevronDarkTheme : chevron} 
                onClick={() => dispatch(closeTodoPanelAndUnsetActiveTodo({todoId}))}
            />
            <StyledBox $isDark={mode === "Dark"}>{createDate}</StyledBox>
            <StyledIcon
                src={mode === "Dark" ? deleteDarkTheme : deleteIcon} 
                onClick={() => dispatch(toggleDeletingTodo({deletingTask:true}))}
            />
        </StyledRestSettings>
    )
}
export default RestSettings

const StyledRestSettings = styled.div`
    position: relative;
    width: 100%;
    padding: 10px 50px;
    font-family: Roboto;
    font-size: 12px;
    color: var(--gray);
    cursor: pointer;
`
const StyledChevron = styled.img`
    position: absolute;
    width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	left:8px;
`
const StyledIcon = styled.img`
    position: absolute;
    width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	right:8px;
`
const StyledBox = styled.div`
    ${props => props.$isDark && `color: var(--gray-dark-theme);`}
`