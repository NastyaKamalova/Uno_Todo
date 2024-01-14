import { useDispatch, useSelector } from "react-redux";
import { searchTodos } from "../../store/actionCreators/todoListActionCreators";
import { styled } from "styled-components";
import search from "../../img/search.svg";
import close from "../../img/close.svg";
import closeForDark from "../../img/closeDark.svg";
import { useContext } from "react";
import AppContext from "../../context/context";
import searchForDark from "../../img/searchDark.svg";

const Search = () => {
	const searchString = useSelector(state => state.todoList.search);
	const dispatch = useDispatch();
	const { mode } = useContext(AppContext);

	return (
		<StyledSearchBox $isDark={mode === "Dark"}>
			<StyledSearchTitle $isDark={mode === "Dark"}
			 $isSearching={searchString}>Search</StyledSearchTitle>
			<StyledResetIcon $isDark={mode === "Dark"}
				onClick={() => {dispatch(searchTodos({search: ''}))}} 
				$isSearching={searchString} 
				src={mode === "Dark" ? closeForDark : close} 
				alt="close" 
			/>
			<StyledSearchIcon src={mode === "Dark" ? searchForDark : search} alt="search"/>
				<StyledSearch $isDark={mode === "Dark"}
					placeholder="Search"
					value={searchString} 
					onChange={(e) => {
						dispatch(searchTodos({search: e.target.value}))
					}}/>
		</StyledSearchBox>
	)
}
  
export default Search;

const StyledSearchBox = styled.div`
	display: block;
	position: relative;
	margin-top: 20px;
	margin-bottom: 20px;
	border-bottom: ${props => props.$isDark ? `2px solid var(--border-input-dark)` :  `2px solid var(--border-input)`} ;
`
const StyledSearchIcon = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	left:16px;
`
const StyledSearch = styled.input`
	background: ${props => props.$isDark ? `var(--dark-gray)` : `var(--search-gray)`};
	display: flex;
	border: none;
	padding: 16px 16px 16px 40px;
	width: 100%;
	color: ${props => props.$isDark && `var(--white)`};

`
const StyledSearchTitle = styled.div`
	position: absolute;
	left: 40px;
	top: 4px;
	color: ${props => props.$isDark ? `var(--purple-dark-theme)` : `var(--blue)`};
	display: ${props => props.$isSearching ? 'block' : 'none'};
	font-size: 12px;
`
const StyledResetIcon = styled.img`
	position: absolute;
	top: calc(50% - 12px);
	right:16px;
	display: ${props => props.$isSearching ? 'block' : 'none'};
	cursor: pointer;
`