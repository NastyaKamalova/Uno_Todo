import styled from "styled-components"
import plusIconWhite from "../img/plusIconWhite.svg"
import AppContext from "../context/context";
import { useContext } from "react";

// variants - cancel, plus, delete
const Button = ({variant, clickHandler, children}) => {
    const { mode } = useContext(AppContext);

    let backgroundColor, fontColor;

    if (mode === "Dark") {
        backgroundColor = variant === 'cancel' ? 'transparent'
                          : variant === 'delete' ? 'var(--light-red-dark-theme)' 
                          : 'var(--purple-dark-theme)';
        fontColor = variant === 'cancel' ? 'var(--purple-dark-theme)' : 'var(--white)';
    } else {
        backgroundColor = variant === 'cancel' ? 'transparent'
                          : variant === 'delete' ? 'var(--light-red)' 
                          : 'var(--blue)';
        fontColor = variant === 'cancel' ? 'var(--blue)' : 'var(--white)';
    }

    return (
            <StyledButton 
                $variant={variant}
                $backgroundColor={backgroundColor}
                $fontColor={fontColor}
                onClick={clickHandler}
            >
                { variant === 'plus' && <StyledIcon src={plusIconWhite}/>}
                {children}
            </StyledButton>
    )
}

export default Button

const StyledButton = styled.div`
    cursor: pointer;
    font-size: 14px;
    border-radius: 20px;
    display: flex;
    width: max-content;
    padding: 10px 15px;
    background: ${ props => props.$backgroundColor };
    color: ${ props => props.$fontColor };
    ${ props => props.$variant === 'cancel' && 'margin-right: 10px'};
`
const StyledIcon = styled.img`
    margin-right: 8px; 
`