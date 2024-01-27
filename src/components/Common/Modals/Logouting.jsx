import { useDispatch } from "react-redux";
import { toggleLogin } from "../../../store/actionCreators/userPanelActionCreators";
import Modal from "../../../ui/Modal";
import styled from "styled-components";
import AppContext from "../../../context/context";
import { useContext } from "react";

const Logouting = () => {
    const dispatch = useDispatch();
    const { mode } = useContext(AppContext);
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleLogin())
        }, 
        {
            variant: "delete",
            text: "Sign out",
            clickHandler: () => dispatch(toggleLogin())
        }
    ]
    return(
        <Modal
            header={'Sign out'}
            buttons={buttons}
        >
            <StyledText $isDark={mode === "Dark"}>Are you sure you would like to sign out?</StyledText>
        </Modal>
    )
}
export default Logouting

const StyledText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${props => props.$isDark ? `var(--transparent-gray)` : `var(--light-gray)`};
    margin: 16px 0px 20px 0px;
`