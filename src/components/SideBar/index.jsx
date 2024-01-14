import Search from "./Search";
import User from "./User";
import SmartList from "./SmartList";
import CreateListButton from "./CreateListButton";
import { styled, css } from "styled-components";
import { useContext } from "react";
import AppContext from "../../context/context";

const SideBar = () => {
	const { mode } = useContext(AppContext);

	return (
		<StyledSideBarContainer $isDark={mode === "Dark"}>
			<div>
				<User/> 
				<Search/>
				<SmartList/>
			</div>
			<div>
				<CreateListButton/>
			</div>
		</StyledSideBarContainer>
	)
}
  
export default SideBar;

const StyledSideBarContainer = styled.div`
	${props => props.$isDark && css`
		background: var(--black);
	`}
	display: flex;
	flex-direction: column;
	padding: 20px 20px;
	width: 25%;
	min-height: 100vh;
	justify-content: space-between;
`
