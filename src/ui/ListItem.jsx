import styled from "styled-components";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import AppContext from "../context/context";

const ListItem = ({
    clickHandler, 
    title,
    deadlineDate,
    active,
    important,
    completed
}) => {
    const { mode } = useContext(AppContext);

    return(
        <StyledListItem $active={active} onClick={clickHandler} $isDark={mode === "Dark"}>
            <Checkbox active={completed} position={'left'} variable={'completed'} />
            <StyledTitle $isDark={mode === "Dark"}>
                {title}
            </StyledTitle>
            <StyledDeadline $isDark={mode === "Dark"}>
                {deadlineDate}
            </StyledDeadline>
            <Checkbox active={important} position={'right'} variable={'important'}/>
        </StyledListItem>
    )
}

export default ListItem

const StyledListItem = styled.div`
    border-radius: 10px;
    padding: 12px 55px;
    position: relative;
    cursor: pointer;
    margin-bottom: 5px;
    ${props => props.$active && !props.$isDark && `
        background: var(--transparent-white); 
    `}
    ${props => props.$active && props.$isDark && `
        background: var(--transparent-black);
    `}
    ${props => !props.$active && props.$isDark && `
        background: var(--black);
    `}
    ${props => !props.$active && !props.$isDark && `
        background: var(--white);
    `}
`
const StyledDeadline = styled.div`
    font-family: Roboto;
    font-size: 14px;
    color: ${props => props.$isDark ? `var(--gray-dark-theme)` : `var(--gray)`};
`
const StyledTitle = styled.div`
    font-family: Roboto;
    font-size: 20px;
    color: ${props => props.$isDark ? `var(--white-dark-theme)` : `var(--black)`}
`