import avatarUserSettings from "../../../../img/avatarUserSettings.svg"
import { styled } from "styled-components";
import { toggleLogin } from "../../../../store/actionCreators/userPanelActionCreators";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import AppContext from "../../../../context/context";
import avatarDarkTheme from "../../../../img/personDarkTheme.svg";

const Person = () => {
    const { mode } = useContext(AppContext);
    const dispatch = useDispatch();
    return (
        <StyledUserBox>
            <div>
                <img src={mode === "Dark" ? avatarDarkTheme : avatarUserSettings} alt="avatar"/>
            </div>
            <StyledUserDataBox>
                <StyledUserName $isDark={mode === "Dark"}>Antonio Bonilla</StyledUserName>
                <StyledUserEmail $isDark={mode === "Dark"}>antonio.bonilla@horus.com.uy</StyledUserEmail>
            </StyledUserDataBox>
            <div>
                <StyledButton $isDark={mode === "Dark"} onClick={() => dispatch(toggleLogin())}>Sign out</StyledButton>
            </div>
        </StyledUserBox>
    )
}
export default Person

const StyledUserBox = styled.div`
    padding: 10px 20px 0px 20px;
    display: flex;
    lex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`
const StyledUserDataBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
`
const StyledUserName = styled.div`
    font-size: 22px;
    color: ${props => props.$isDark ? `var(--white-dark-theme)` : `var(--black)`};
    line-height: 28px;
`
const StyledUserEmail = styled.div`
    font-size: 14px;
    color: ${props => props.$isDark ? `var(--gray-dark-theme)` : `var(--gray)`};
`
const StyledButton = styled.div`
    cursor: pointer;
    color:  ${props => props.$isDark ? `var(--light-red-dark-theme)` : `var(--light-red)`};
    padding: 12px;
`