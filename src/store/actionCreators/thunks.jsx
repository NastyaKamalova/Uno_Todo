import { createList, createTodo, deleteList, removeTodo, renameList } from "./dataActionCreators"
import { swithActiveList, toggleAllTasks, toggleCreatingList, toggleCreatingTodo, toggleDeletingList, toggleImportantTasks, toggleRenaimingList } from "./todoListActionCreators"
import { setActiveTodo, toggleDeletingTodo, toggleTodoPanel } from "./todoPanelActionCreators"
import { saveUserSettings, toggleUserPanel } from "./userPanelActionCreators"

function renameListAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(renameList(payload))
        dispatch(toggleRenaimingList())
    }
}
function addListAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(createList(payload))
        dispatch(toggleCreatingList())
    }
}
function deleteListAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(toggleAllTasks ({ isAllTasks: true }))
        dispatch(swithActiveList({activeList: null}))
        dispatch(setActiveTodo({todoId: null, listId: null}))
        dispatch(toggleTodoPanel({showingTodoPanel: false}))        
        dispatch(deleteList({listId: payload.activeList}))
        dispatch(toggleDeletingList())
    }
}
function addTodoAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(createTodo(payload))
        dispatch(toggleCreatingTodo())
    }
}
function onImportantListandOffMenuItems() {
    return function (dispatch) {
        dispatch(toggleAllTasks ({ isAllTasks: false }))
        dispatch(toggleImportantTasks ({ isImportant: true }))
        dispatch(swithActiveList ({activeList: null}))
    }
}
function onAllTasksAndOffMenuItems() {
    return function (dispatch) {
        dispatch(toggleAllTasks({isAllTasks: true }))
        dispatch(toggleImportantTasks({isImportant: false }))
        dispatch(swithActiveList({activeList: null}))
    }
}
function onActiveListAndOffMenuItem(payload) {
    return function (dispatch) {
        dispatch(toggleAllTasks({isAllTasks: false }))
        dispatch(toggleImportantTasks({isImportant: false }))
        dispatch(swithActiveList(payload))
    }
}
function openTodoPanelAndSetActiveTodo(payload) {
    return (dispatch) => {
        dispatch(setActiveTodo(payload))
        dispatch(toggleTodoPanel({showingTodoPanel: true}))
    }
}
function closeTodoPanelAndUnsetActiveTodo(payload) {
    return (dispatch) => {
        dispatch(setActiveTodo({todoId: null, listId: null}))
        dispatch(toggleTodoPanel({showingTodoPanel: false}))
    }
}
function deleteTodoAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(setActiveTodo({todoId: null, listId: null}))
        dispatch(toggleTodoPanel({showingTodoPanel: false}))
        dispatch(removeTodo(payload))
        dispatch(toggleDeletingTodo({delitingTask: false}))
    }
}
function saveUserSettingsAndCloseModal(payload) {
    return (dispatch) => {
        dispatch(saveUserSettings(payload))
        dispatch(toggleUserPanel({showingUserPanel: false}))
    }
} 
export {
    renameListAndCloseModal,
    addListAndCloseModal,
    deleteListAndCloseModal,
    addTodoAndCloseModal,
    onImportantListandOffMenuItems,
    onAllTasksAndOffMenuItems,
    onActiveListAndOffMenuItem,
    openTodoPanelAndSetActiveTodo,
    closeTodoPanelAndUnsetActiveTodo,
    deleteTodoAndCloseModal,
    saveUserSettingsAndCloseModal
}
