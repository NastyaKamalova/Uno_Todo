import { useDispatch, useSelector } from "react-redux";
import { toggleRenaimingList, toggleDeletingList } from "../../../store/actionCreators/todoListActionCreators";
import styled from "styled-components"
import remove from "../../../img/remove.svg"
import edit from "../../../img/edit.svg"

const ListEditPanel = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.data);
    const activeListId = useSelector(state => state.todoList.activeList);
    const listTitle = lists.find(iter => iter.id === activeListId).title

    return(
        <StyledListHeader>
            <div>
                <StyledTitle>{listTitle}</StyledTitle>
            </div>
            <StyledButtonBox>
                <StyledIconWrapper onClick = {() => {dispatch(toggleRenaimingList())}}>
                    <StyledEditIcon src={edit}/>
                </StyledIconWrapper>
                <StyledIconWrapper onClick = {() => {dispatch(toggleDeletingList())}}>
                    <StyledDeleteIcon src={remove}/>
                </StyledIconWrapper>
            </StyledButtonBox>
        </StyledListHeader>
    )
}
export default ListEditPanel

const StyledListHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px 0px;
`
const StyledTitle = styled.div`
    color: var(--white);
    font-family: Roboto;
    font-size: 22px;
`
const StyledIconWrapper = styled.div`
    cursor: pointer;
`
const StyledButtonBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const StyledEditIcon = styled.img`
    width: 40px;
    height: 40px;
`
const StyledDeleteIcon = styled.img`
    width: 25px;
    height: 25px;
`