import checkboxStar from "../img/chekcboxStar.svg"
import starActive from "../img/starActive.svg"
import checkbox from "../img/checkbox.svg"
import checkboxActive from "../img/checkboxActive.svg"
import styled from "styled-components"
import checkboxDarkActive from "../img/checkboxDarkActive.svg"
import checkboxDark from "../img/checkBoxDark.svg" 
import starDarkTheme from "../img/starDarkTheme.svg"
import AppContext from "../context/context"
import { useContext } from "react"

const Checkbox = ({active, position, variable, clickHandler}) => {
    const { mode } = useContext(AppContext);
    let src;
    if (mode === "Dark") {
        src = variable === "completed" && active ? checkboxDarkActive
        : variable === "completed" && !active ? checkboxDark
        : variable === "important" && active ? starActive
        : starDarkTheme;
    } else {
        src = variable === "completed" && active ? checkboxActive
        : variable === "completed" && !active ? checkbox
        : variable === "important" && active ? starActive
        : checkboxStar;
    }
    return <StyledCheckbox $position={position} src={src} onClick={clickHandler}/>
}
export default Checkbox

const StyledCheckbox = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 20px);
	${props => props.$position + ":8px;"}
`