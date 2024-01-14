import styled from "styled-components"
import RadioButton from "./RadioButton"
import { useContext } from "react";
import AppContext from "../context/context";

const RadioButtonBox = ({header, buttons, desc}) => {
    const { mode } = useContext(AppContext);
    return(
        <StyledSettingsBox>
            <StyledTitle $isDark={mode === "Dark"}>{header}</StyledTitle>
            <StyledButtonBox>
                { buttons.map((b) => <RadioButton key={b.text} { ...b } />) }
            </StyledButtonBox>
            {desc && <StyledDesc $isDark={mode === "Dark"}>{desc}</StyledDesc>}
        </StyledSettingsBox>
    )
}
export default RadioButtonBox

const StyledSettingsBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const StyledTitle = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin-bottom: 5px;
    color: ${props => props.$isDark ? `var(--white-dark-theme)` : `var(--black)`};
`
const StyledButtonBox = styled.div`
    display: flex;
`
const StyledDesc = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.4px;
    color: ${props => props.$isDark ? `var(--transparent-gray)` : `var(--light-gray)`};
`