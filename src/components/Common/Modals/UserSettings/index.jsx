import { useDispatch, useSelector } from "react-redux"
import { toggleUserPanel } from "../../../../store/actionCreators/userPanelActionCreators"
import Modal from "../../../../ui/Modal"
import About from "./About"
import General from "./General"
import Person from "./Person"
import Divider from "../../../../ui/Divider"
import { useState } from "react"
import { saveUserSettingsAndCloseModal } from "../../../../store/actionCreators/thunks"

const UserSettings = () => {
    const defaultPalette = useSelector(state => state.userPanel.palette)
    const defaultLang = useSelector(state => state.userPanel.lang)
    const defaultMode = useSelector(state => state.userPanel.mode)
    const [palette, setPalette] = useState(defaultPalette);
    const [lang, setLang] = useState(defaultLang);
    const [mode, setMode] = useState(defaultMode);
    const dispatch = useDispatch();
    const buttons = [
        {
            variant: "cancel",
            text: "Cancel",
            clickHandler: () => dispatch(toggleUserPanel())
        }, 
        {
            variant: "default",
            text: "Save",
            clickHandler: () => dispatch(saveUserSettingsAndCloseModal({palette, lang, mode}))
        }
    ]
    return (
        <Modal header={'Settings'} buttons={buttons}>
            <Person/>
            <Divider/>
            <General 
                palette={palette} 
                setPalette={setPalette}
                lang={lang} 
                setLang={setLang}
                mode={mode} 
                setMode={setMode}
            />
            <Divider/>
            <About/>
        </Modal>
    )
}
export default UserSettings