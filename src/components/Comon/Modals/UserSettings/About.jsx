import { useContext } from "react";
import { styled } from "styled-components";
import AppContext from "../../../../context/context";

const About = () => {
    const { mode } = useContext(AppContext);
    return (
        <StyledAboutBox>
            <StyledHeader $isDark={mode === "Dark"}>About</StyledHeader>
            <StyledTextBox>
                <StyledText $isDark={mode === "Dark"}>Version</StyledText>
                <StyledVersion $isDark={mode === "Dark"}>1.0</StyledVersion>
            </StyledTextBox>
        </StyledAboutBox>
    )
}
export default About

const StyledAboutBox = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledHeader = styled.div`
    font-size: 14px;
    color: ${props => props.$isDark ? `var(--purple-dark-theme)` : `var(--blue)`};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 5px;
`
const StyledTextBox = styled.div`
    display: flex;
`
const StyledText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    margin-right: 25px;
    ${props => props.$isDark && `color: var(--white);`}
`
const StyledVersion = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: ${props => props.$isDark ? `var(--purple-dark-theme)` : `var(--blue)`};
`