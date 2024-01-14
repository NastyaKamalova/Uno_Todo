import { useContext } from "react";
import { styled } from "styled-components";
import AppContext from "../context/context";

const Divider = () => {
    const { mode } = useContext(AppContext);
    return(
        <StyledDivider $isDark={mode === "Dark"}/>
    )
}

export default Divider

const StyledDivider = styled.div`
    background: ${props => props.$isDark ? `var(--divider-dark-theme)` : `var(--divider-gray)`};
    margin: 15px 0px 15px 0px;
    height: 1px;
`