import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../../ui/MenuItem";
import leading from "../../../img/leading.svg";
import styled from "styled-components";
import { onActiveListAndOffMenuItem } from "../../../store/actionCreators/thunks";
import leadingDarkTheme from "../../../img/leadingDarkTheme.svg"
import AppContext from "../../../context/context";
import { useContext } from "react";

const Lists = () => {
	const { mode } = useContext(AppContext)
	const lists = useSelector(state => state.data);
	const activeListId = useSelector(state => state.todoList.activeList);
	const dispatch = useDispatch();
	return (
		<StyledList>
			{
				lists.map(iter => (
					<li key={iter.id}>
						<MenuItem
							icon= {mode === "Dark" ? leadingDarkTheme : leading } 
							text={iter.title} 
							clickHandler={() => {dispatch(onActiveListAndOffMenuItem({activeList: iter.id}))}} 
							isActive={activeListId === iter.id} 						
						/>
					</li>
				))
			}
		</StyledList>
	) 
}
  
export default Lists;

const StyledList = styled.ul`
	list-style-type: none;
`