import { useContext } from "react";
import { styled, css } from "styled-components";
import AppContext from "../context/context";

const RadioButton = ({text, isActive, src, onClick}) => {
    const { mode } = useContext(AppContext);
    let fontColor, background, border; 
    if (mode === "Dark") {
        fontColor = isActive ? `var(--radio-button-active-text-dark)`: `var(--radio-button-text-dark)`;
        background = isActive ? `var(--radio-button-active-background)` : `var (--black)`;
        border = isActive ? `none` : `1px solid var(--radio-button-border-dark)`;
    } else {
        fontColor = isActive ? `var(--active-radio-buttons-text)`: `var(--radio-buttons-text)`;
        background = isActive ? `var(--light-purple)` : `var (--white)`;
        border = isActive ? `1px solid var(--light-purple)` : `1px solid var(--radio-buttons-border)`;
    }
    return(
        <StyledRadioButton
            onClick={onClick}
            $fontColor={fontColor}
            $background={background}
            $border={border}
        >
            {src && <StyledImg src={src} />}
            {text}
        </StyledRadioButton>
    )
}
export default RadioButton

const StyledRadioButton = styled.div`
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    background: ${props => props.$background};
    color: ${props => props.$fontColor};
    border: ${props => props.$border};
    padding: 8px 16px;
    cursor: pointer;
    margin-right: 5px;
`
const StyledImg = styled.img`
    margin-right: 8px;
    margin-left: -5px;
`