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
import todoListInterface from '../initialStates/todoListInitialState';

function todoListReducer(state = todoListInterface, { type, payload }) {
    switch (type) {
        case SWITCH_COMPLETED_LIST: return {
            ...state,
            showingCompleted: payload.completed
        }
         case SWITCH_IMPORTANT_LIST: return {
            ...state,
            showingImportant: payload.isImportant
        }
        case   SWITCH_ALL_TASKS: return {
            ...state,
            showingAllTasks: payload.isAllTasks
        }
        case SELECT_ACTIVE_LIST: return {
            ...state,
            activeList: payload.activeList
        }
        case SEARCH_TODOS: return {
            ...state,
            search: payload.search
        }
        case TOGGLE_RENAMING_LIST: return {
            ...state,
            renamingList: !state.renamingList
        }
        case TOGGLE_DELETING_LIST: return {
            ...state,
            deletingList: !state.deletingList
        }
        case TOGGLE_CREATING_LIST: return {
            ...state,
            creatingList: !state.creatingList
        }
        case TOGGLE_CREATING_TODO: return {
            ...state,
            creatingTodo: !state.creatingTodo
        }
        default: return state
    }
}
export default todoListReducer;