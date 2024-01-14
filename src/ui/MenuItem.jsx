import chevron from "../img/chevron.svg";
import chevronDarkTheme from "../img/chevronDarkTheme.svg";
import { styled, css } from "styled-components";
import { useContext } from "react";
import AppContext from "../context/context";

const MenuItem = ({icon, text, clickHandler, isActive}) => {
	const { mode } = useContext(AppContext)
    return (
        <StyledMenuItem 
			$isDark={mode === "Dark"}
            $isActive={isActive} 
            onClick={clickHandler}
        >
            {text} 
            <StyledIcon src={icon} alt="icon"></StyledIcon>
            <StyledChevron src= {mode === "Dark" ? chevronDarkTheme : chevron } alt="icon"></StyledChevron>
        </StyledMenuItem>
    )
}

export default MenuItem;

const StyledMenuItem = styled.div`
	display: block;
	font-family: Roboto;
	font-size: 16px;
	padding: 10px 42px 10px 42px;
	position: relative;
	cursor: pointer;
	background: ${
		props => props.$isActive && props.$isDark 
			? `var(--dark-gray)`
			: props.$isActive ? `var(--light-purple)`
			: `transparent`
	};

	${props => props.$isDark && css`
		color: var(--white-dark-theme);
	`}
`
const StyledChevron = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	right:8px;
`
const StyledIcon = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	left:8px;
`