import {
    TOGGLE_USER_PANEL,
    TOGGLE_LOGIN,
    SAVE_USER_SETTINGS
} from '../actions/userPanelActions';
import userInterface from '../initialStates/userPanelInitialState';

function userPanelReducer(state = userInterface, {type, payload}) {
    switch (type) {
        case TOGGLE_USER_PANEL: return {
            ...state,
            showingUserPanel: !state.showingUserPanel
        }
        case TOGGLE_LOGIN: return {
            ...state,
            logouting: !state.logouting
        }            
        case SAVE_USER_SETTINGS: return {
            ...state,
            palette: payload.palette,
            lang: payload.lang,
            mode: payload.mode
        }   
        default: return state

    }
}
export default userPanelReducer