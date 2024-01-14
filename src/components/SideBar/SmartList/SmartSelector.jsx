import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import star from "../../../img/star.svg";
import house from "../../../img/house.svg";
import MenuItem from "../../../ui/MenuItem";
import { onAllTasksAndOffMenuItems, onImportantListandOffMenuItems } from "../../../store/actionCreators/thunks";
import houseDarkTheme from "../../../img/houseDarkTheme.svg"
import { useContext } from "react";
import AppContext from "../../../context/context";

const SmartSelector = () => {
	const isImportant = useSelector(state => state.todoList.showingImportant)
	const isAllTasks = useSelector(state => state.todoList.showingAllTasks)
	const { mode } = useContext(AppContext);
	const dispatch = useDispatch();
	return (
		<StyledMenu>
			<MenuItem 
				icon={star} 
				text={'Important'} 
				clickHandler={() => dispatch(onImportantListandOffMenuItems ())} 
				isActive={isImportant} 
			/>
			<MenuItem
				icon= {mode === "Dark" ? houseDarkTheme : house } 
				text={'Tasks'} 
				clickHandler={() => dispatch(onAllTasksAndOffMenuItems())} 
				isActive={isAllTasks} 
			/>
		</StyledMenu>
	)
}

export default SmartSelector;

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
`