import {
    TOGGLE_EDITING_TITLE,
    TOGGLE_EDITING_DEADLINE,
    TOGGLE_DELETING_TODO,
    TOGGLE_TODO_PANEL,
    SET_ACTIVE_TODO
} from '../actions/todoPanelActions';

const toggleEditingTitle = (payload) => ({type:TOGGLE_EDITING_TITLE,payload});
const toggleEditingDeadline = (payload) => ({type:TOGGLE_EDITING_DEADLINE,payload});
const toggleDeletingTodo = (payload) => ({type:TOGGLE_DELETING_TODO,payload});
const toggleTodoPanel = (payload) => ({type:TOGGLE_TODO_PANEL,payload});
const setActiveTodo = (payload) => ({type:SET_ACTIVE_TODO, payload});

export {
    toggleEditingTitle,
    toggleEditingDeadline,
    toggleDeletingTodo,
    toggleTodoPanel,
    setActiveTodo,
}