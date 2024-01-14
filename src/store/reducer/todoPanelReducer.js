import {
    TOGGLE_EDITING_TITLE,
    TOGGLE_EDITING_DEADLINE,
    TOGGLE_DELETING_TODO,
    TOGGLE_TODO_PANEL,
    SET_ACTIVE_TODO
} from '../actions/todoPanelActions';
import todoInterface from '../initialStates/todoPanelInitialState';

function todoPanelReducer(state = todoInterface, {type, payload}) {
    switch (type) {
        case TOGGLE_EDITING_TITLE: return {
            ...state,
            editingTitle: payload.editingTitle
        }
        case TOGGLE_EDITING_DEADLINE: return {
            ...state,
            editingDeadline: payload.editingDeadline
        }            
        case TOGGLE_DELETING_TODO: return {
            ...state,
            deletingTask: payload.deletingTask
        } 
        case TOGGLE_TODO_PANEL: return {
            ...state,
            showingTodoPanel:payload.showingTodoPanel
        }    
        case SET_ACTIVE_TODO: return {
            ...state,
            activeTodo: {
                todoId: payload.todoId,
                listId: payload.listId,
            }
        }    
        default: return state
    }
}
export default todoPanelReducer