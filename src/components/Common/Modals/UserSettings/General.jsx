import { styled } from "styled-components";
import darkThemeIcon from "../../../../img/darkThemeIcon.svg";
import lightThemeIcon from "../../../../img/lightThemeIcon.svg";
import RadioButtonBox from "../../../../ui/RadioButtonsBox";
import { useContext } from "react";
import AppContext from "../../../../context/context";
import lightThemeIconDark from "../../../../img/lightThemeIconDark.svg";
import darkThemeIconDark from "../../../../img/darkThemeIconDark.svg";

const General = ({
    palette, setPalette,
    lang, setLang,
    mode, setMode
}) => {
    const context = useContext(AppContext);
    const currentMode = context.mode;
    const paletteButtons = [
        { text: "Purple", isActive: palette === "Purple", onClick: () => setPalette("Purple") },
        { text: "Blue", isActive: palette === "Blue", onClick: () => setPalette("Blue") },
        { text: "Yellow", isActive: palette === "Yellow", onClick: () => setPalette("Yellow") },
    ]
    const langButtons = [
        { text: "English", isActive: lang === "English", onClick: () => setLang("English") },
        { text: "French", isActive: lang === "French", onClick: () => setLang("French") },
        { text: "Spanish", isActive: lang === "Spanish", onClick: () => setLang("Spanish") },
    ]
    const modeButtons = [
        {
            text: "Light", isActive: 
            mode === "Light",
            src : mode === "Dark" ?  lightThemeIconDark : lightThemeIcon, 
            onClick: () => setMode("Light") 
        },
        { 
            text: "Dark", isActive:  
            mode === "Dark", 
            src : mode === "Dark" ?  darkThemeIconDark : darkThemeIcon , 
            onClick: () => setMode("Dark") 
        },
    ]
    
    return (
        <StyledGeneralBox>
            <StyledHeader $isDark={currentMode === "Dark"}>General</StyledHeader>
            <RadioButtonBox header={"Color palette"} buttons={paletteButtons}/>
            <RadioButtonBox 
                header={"Language"} 
                buttons={langButtons} 
                desc={"Change will be applied at next app restart"}
            />
            <RadioButtonBox header={"Mode"} buttons={modeButtons}/>
        </StyledGeneralBox>
    )
}
export default General

const StyledGeneralBox = styled.div`
    display: flex;
    padding-top: 10px;
    flex-direction: column;
`
const StyledHeader = styled.div`
    color: ${props => props.$isDark ? `var(--purple-dark-theme)` : `var(--blue)`};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 5px;
`
