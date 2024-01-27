import { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import AppContext from "../context/context";

const InputText = ({value, changeHandler, placeholder, checkEmpty }) => {
    const { mode } = useContext(AppContext);
    const inputRef = useRef(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])
    const error = checkEmpty && !value ? 'Enter the field!' : false;
    return(
        <StyledInputBox $isDark={mode === "Dark"} $error={error}>
            <StyledInputText 
                $isDark={mode === "Dark"}
                ref={inputRef}
                placeholder={placeholder}
                value={value} 
                onChange={(e) => changeHandler(e.target.value)}
            />
        </StyledInputBox>
    )
}
export default InputText

const StyledInputBox = styled. div`
    position: relative;
    border-bottom: ${props => props.$isDark ? `2px solid var(--border-input-dark)` : `2px solid var(--border-input)`};
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 16px;
    background: ${props => props.$isDark ? `var(--modal-input-dark)` : `var(--background-modal-input)`};
    ${props => props.$error && css`
        border: 1px solid var(--red);
        &:after {
            content: "${props => props.$error}";
            position: absolute;
            bottom: -30px;
            display: block;
            color: var(--red);
        }
    `}
`
const StyledInputText = styled. input`
    width: 100%;
    color: ${props => props.$isDark ? `var(--white)` : `var(--black)`};
    font-family: Roboto;
    font-size: 16px;
    border: none;
    background: ${props => props.$isDark ? `var(--modal-input-dark)` : `var(--background-modal-input)`};
    line-height: 24px; 
    letter-spacing: 0.5px;
    &::placeholder {
        color: ${props => props.$isDark ? `var(--border-input-dark)` : `var(--light-gray)`};
    }
`