import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDeadline } from "../../../store/actionCreators/dataActionCreators";
import { toggleEditingDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import close from "../../../img/close.svg";
import styled from "styled-components";
import AppContext from "../../../context/context";
import closeDarkTheme from "../../../img/closeDateDarkTheme.svg";
import calendarEmptyDark from "../../../img/calendarEmptyDark.svg";
import calendarEmptyLight from "../../../img/calendarEmptyLight.svg";
import calendarDarkTheme from "../../../img/calendarDarkTheme.svg";
import calendarLightTheme from "../../../img/calendarLightTheme.svg";

const DataSettings = ({deadline, todoId, listId}) => {
  const { mode } = useContext(AppContext);
  const dispatch = useDispatch();  
  const isEditDeadline = useSelector(state => state.todoPanel.editingDeadline);
  const inputRef = useRef(null);

  let buttonIcon; 
  if (mode === "Dark") {
    buttonIcon = (isEditDeadline || deadline) ? calendarDarkTheme : calendarEmptyDark
  } else {
    buttonIcon = (isEditDeadline || deadline) ? calendarLightTheme : calendarEmptyLight
  }
  useEffect(() => {
    if (isEditDeadline) {
      inputRef.current.focus()
      inputRef.current.addEventListener("blur", () => {
        dispatch(toggleEditingDeadline({editingDeadline:false}))
      })
    }
  }, [isEditDeadline])

  const changeDeadlineHandler = (e) => {
    dispatch(changeDeadline({listId, todoId, deadlineDate: e.target.value}))
  }
  const resetDeadlineHandler = () => {
    dispatch(changeDeadline({listId, todoId, deadlineDate: ""}))
  }

  return (
    <StyledDateSettings>
      <StyledIconButton src={buttonIcon}/>
      {
        isEditDeadline ? (
            <StyledInput 
              $isDark={mode === "Dark"} 
              value={deadline} onChange={changeDeadlineHandler} 
              ref={inputRef}
              placeholder="Add Due Date"
            />
        ) : (
            <StyledDeadline 
              $isDark={mode === "Dark"}
              $isEmpty={!deadline}
              onClick={() => {dispatch(toggleEditingDeadline({editingDeadline:true}))}}
            >
              {deadline ? deadline : "Add Due Date"}
            </StyledDeadline>
        )
      }
      <StyledCloseButton 
        onClick={resetDeadlineHandler} 
        src={mode === "Dark" ? closeDarkTheme : close} 
        $isEmpty={!deadline}
      />
    </StyledDateSettings>
  )
}
export default DataSettings

const StyledDateSettings = styled.div`
  position: relative;
  font-family: Roboto;
  font-size: 16px;
  padding: 0px 50px;
`
const StyledIconButton = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);
  left:8px;
`
const StyledCloseButton = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(50% - 12px);
  right:8px;
  display: ${props => props.$isEmpty ? 'none' : 'block'};
`
const StyledInput = styled.input`
  height: 20px;
  line-height: 20px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  width: 100%;
  background: ${props => props.$isDark ? `var(--black)` : `var(--white)`};
  color: ${props => props.$isDark ? `var(--gray-dark-theme)` : `var(--black)`};
`
const StyledDeadline = styled.div`
  height: 20px;
  line-height: 20px;
  color: ${props => props.$isDark && props.$isEmpty ? `var(--gray-dark-theme)`
                    : props.$isDark && !props.$isEmpty ? `var(--purple-dark-theme)`
                    : !props.$isDark && props.$isEmpty ? `var(--gray)`
                    : `var(--blue)`};
`