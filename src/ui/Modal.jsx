import styled from "styled-components"
import Button from "./Button"
import AppContext from "../context/context";
import { useContext } from "react";

const Modal = ({header, buttons, children}) => {
    const { mode } = useContext(AppContext);
    return (
        <>
            <StyledModalBg/>
            <StyledWrapperModal>
                <StyledModal $isDark={mode === "Dark"}>
                    <StyledHeader $isDark={mode === "Dark"}>{header}</StyledHeader>
                    {children}
                    <StyledFooter>
                        {
                            buttons.map(button => <Button 
                                key={button.variant}
                                variant={button.variant}
                                clickHandler={button.clickHandler}
                            >
                                {button.text}
                            </Button>)
                        }
                    </StyledFooter>
                </StyledModal>
            </StyledWrapperModal>
        </>
    )
}

export default Modal

const StyledWrapperModal = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow-y: auto;
`

const StyledModal = styled.div`
    padding: 25px;
    border-radius: 28px;
    background: ${props => props.$isDark ? `var(--black)` : `var(--white)`};
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`
const StyledHeader = styled.div`
    font-family: Roboto;
    font-size: 22px;
    ${props => props.$isDark && `color: var(--white-dark-theme);`}
`
const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`
const StyledModalBg = styled.div`
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3)
`