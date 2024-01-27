import styled from "styled-components";
import AppContext from "../context/context";
import { useContext } from "react";

const TextBox = ({head, body, headColor, bodyColor}) => {
    const { mode } = useContext(AppContext);
    let headFontColor, bodyFontColor;
    if (mode === "Dark") {
        headFontColor = "var(--white)";
        bodyFontColor = "var(--white)";
    } else {
        headFontColor = headColor === "gray" ? "var(--gray)" : "var(--white)";
        bodyFontColor = bodyColor === "light-gray" ? "var(--light-gray)" : "var(--white)";
    }

    return(
            <StyledTextBox>
                <StyledHead $color={headFontColor}>
                    {head} 
                </StyledHead>
                <StyledBody $color={bodyFontColor}>
                    {body}
                </StyledBody>
            </StyledTextBox>
    )
}
export default TextBox;

const StyledHead = styled.div`
    font-family: Roboto;
    font-size: 28px;
    color: ${props => props.$color};
`
const StyledBody = styled.div`
    font-family: Roboto;
    font-size: 14px;
    color: ${props => props.$color};
`
const StyledTextBox = styled.div`
    display: flex;
    color: var(--white);
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
    padding-top: 170px;
`