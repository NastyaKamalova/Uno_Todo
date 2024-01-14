import { styled } from "styled-components";
import logo from "../img/logo.svg";
import ilustration from "../img/ilustration.svg";

const StartPage = ({setIsStartPage}) => {
    return (
        <StyledStartPage>
            <StyledLeftContainer>
                <StayledContentBox>
                    <StyledLogo>
                        <img src={logo} alt="logo"/>
                    </StyledLogo>
                    <div>
                        <StyledHead>Welcome to Uno To Do!</StyledHead>
                        <StyledText>Start using the best to-do app, you can
                        create and manage your To Do lists to improve your organization.
                        </StyledText>
                    </div>
                    <StyledBtnBox>
                        <StyledButton onClick={() => setIsStartPage(false)}>Get started</StyledButton>
                    </StyledBtnBox>
                </StayledContentBox>
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledImg/>
            </StyledRightContainer>
        </StyledStartPage>
    )
}

export default StartPage;

const StyledHead = styled.h1`
    font-size: 57px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    font-family: Roboto;
`
const StyledButton = styled.button`
    display: flex;
    width: 330px;
    height: 40px;
    background: var(--blue);
    color: var(--white);
    border: none;
    border-radius: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const StyledLogo = styled.div`
    display: flex;
    width: 103px;
    height: 30px;
    justify-content: center;
    align-items: center;
`
const StyledImg = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${ilustration}) no-repeat center;
`
const StyledText = styled.div`
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: var(--blue-text-start-page);
    margin-top: 16px;
`
const StyledLeftContainer = styled.div`
    padding: 20px 60px;
    display: flex;
`
const StyledBtnBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const StyledStartPage = styled.div`
    display: flex;
`
  
const StyledRightContainer = styled.div`
    height: 100vh;
    width: 66.66%;
`
const StayledContentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 33.33%;
    max-width:450px;
    flex-direction: column;
    justify-content: center;
`;