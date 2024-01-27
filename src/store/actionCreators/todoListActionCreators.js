import {
    SWITCH_COMPLETED_LIST,
    SWITCH_IMPORTANT_LIST,
    SWITCH_ALL_TASKS,
    SELECT_ACTIVE_LIST,
    SEARCH_TODOS,
    TOGGLE_RENAMING_LIST,
    TOGGLE_DELETING_LIST,
    TOGGLE_CREATING_LIST,
    TOGGLE_CREATING_TODO
} from '../actions/todoListActions';

const toggleAllTasks = (payload) => ({type: SWITCH_ALL_TASKS, payload});
const toggleImportantTasks = (payload) => ({type: SWITCH_IMPORTANT_LIST, payload});
const swithActiveList = (payload) => ({type:SELECT_ACTIVE_LIST, payload});
const switchCompletedList = (payload) => ({type:SWITCH_COMPLETED_LIST, payload});
const searchTodos = (payload) => ({type:SEARCH_TODOS, payload});
const toggleRenaimingList = () => ({type:TOGGLE_RENAMING_LIST});
const toggleDeletingList = () => ({type:TOGGLE_DELETING_LIST});
const toggleCreatingList = () => ({type:TOGGLE_CREATING_LIST});
const toggleCreatingTodo = () => ({type:TOGGLE_CREATING_TODO});

export {
    switchCompletedList,
    swithActiveList,
    searchTodos,
    toggleAllTasks,
    toggleImportantTasks,
    toggleRenaimingList,
    toggleDeletingList,
    toggleCreatingList,
    toggleCreatingTodo
}