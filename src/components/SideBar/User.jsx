import { useDispatch } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import { styled, css } from "styled-components";
import person from "../../img/person.svg";
import { useContext } from "react";
import AppContext from "../../context/context";
import avatarDarkTheme from "../../img/avatarDarkTheme.svg";

const User = () => {
	const dispatch = useDispatch();
	const { mode } = useContext(AppContext);
	return (
		<StyledUserBox onClick={() => {dispatch(toggleUserPanel())}}>
			<StyledAvatarBox>
				<img src= {mode === "Dark" ? avatarDarkTheme : person }/>
			</StyledAvatarBox>
			<StyledUserDataBox>
				<StyledusrName $isDark={mode === "Dark"}>Antonio Bonilla</StyledusrName>
				<StyledUserEmail $isDark={mode === "Dark"}>antonio.bonilla@horus.com.uy</StyledUserEmail>
			</StyledUserDataBox>
		</StyledUserBox>
	)
}
  
export default User;

const StyledUserBox = styled.div`
	display: flex;
`
const StyledAvatarBox = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: column;
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`
const StyledUserDataBox = styled.div`
	display: block;
`
const StyledusrName = styled.span`
	${props => props.$isDark && css`
		color: var(--white-dark-theme);
	`}
	display: flex;
	font-family: Roboto;
	font-size: 14px;
`
const StyledUserEmail = styled.span`
	display: flex;
	font-family: Roboto;
	color: ${props => props.$isDark ? `var(--gray-dark-theme)` : `var(--gray)`};
	font-size: 12px;
`