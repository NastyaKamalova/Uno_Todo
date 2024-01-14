import {
    TOGGLE_USER_PANEL,
    TOGGLE_LOGIN,
    SAVE_USER_SETTINGS
} from '../actions/userPanelActions';

function toggleUserPanel() {
    return{type:TOGGLE_USER_PANEL}
}
function toggleLogin() {
    return{type:TOGGLE_LOGIN}
}
function saveUserSettings(payload) {
    return{type:SAVE_USER_SETTINGS,payload }
}

export {
    toggleUserPanel,
    toggleLogin,
    saveUserSettings 
}