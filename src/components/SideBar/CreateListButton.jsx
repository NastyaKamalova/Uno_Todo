import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import plusIconPurple from "../../img/plusIconPurple.svg"
import styled from "styled-components";
import { useContext } from "react";
import AppContext from "../../context/context";
import plusIconDarkTheme from "../../img/plusIconDarkTheme.svg";

const CreateListButton = () => {
	const { mode } = useContext(AppContext);
	const dispatch = useDispatch();
	return (
		<StyledCreateListButton $isDark={mode === "Dark"} onClick={() => dispatch(toggleCreatingList())}>
			<StyledAddIcon src= {mode === "Dark" ? plusIconDarkTheme : plusIconPurple}/>
			New List
		</StyledCreateListButton>
	)
}
  
export default CreateListButton;

const StyledCreateListButton = styled.div`
	font-family: Roboto;
	font-size: 16px;
	padding: 10px 42px 10px 42px;
	position: relative;
	cursor: pointer;
	color:  ${props => props.$isDark ? `var(--purple-dark-theme)` : `var(--blue)`};
`
const StyledAddIcon = styled.img`
	position: absolute;
	width: 18px;
	height: 18px;
	top: calc(50% - 9px);
	left:8px;
`