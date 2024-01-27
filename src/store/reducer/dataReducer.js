import dataInitialState from '../initialStates/dataInitialState'
import {
	CHANGE_LIST_TITLE,
	ADD_LIST,
	REMOVE_LIST,
	ADD_TODO_TO_LIST,
	CHANGE_TODO_TITLE,
	REMOVE_TODO,
	CHANGE_COMPLETED_TODO,
    CHANGE_IMPORTANT_TODO,
	CHANGE_DEADLINE_DATE_TODO,
	CHANGE_NOTE_TODO
} from '../actions/dataActions';
import { getFormatDateNow } from '../../helpers/date';

function dataReducer(state = dataInitialState, {type, payload}) {
    switch (type) {
        case CHANGE_LIST_TITLE: return state.map(item => {
            if (item.id === payload.listId) item.title = payload.title;
            return item
        })
        case ADD_LIST: return [
            ...state,
            {
                id: Date.now(),
                todos: [],
                title: payload.title
            }
        ]
        case REMOVE_LIST: return state.filter(iter => iter.id !== payload.listId)
        case ADD_TODO_TO_LIST: return state.map(item => { 
            if (item.id === payload.listId) {
                return {
                    ...item,
                    todos: [
                        ...item.todos,
                        {
                            id: Date.now(),
                            listId: payload.listId,
                            completed: false,
                            important: false,
                            createDate: getFormatDateNow(),
                            deadLineDate: null,
                            title: payload.todoTitle
                        }
                    ]
                }
            }
            return item;
        })
        case REMOVE_TODO: return state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item,
                    todos: item.todos.filter(todo => payload.todoId !== todo.id)
                }
            }
            return item;
        }) 
        case CHANGE_TODO_TITLE: return state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item,
                    todos: item.todos.map(itemTodo => {
                        if (itemTodo.id === payload.todoId) {
                            return {
                                ...itemTodo,
                                title: payload.todoTitle
                            }
                        }
                        return itemTodo;
                    })
                }
            }
            return item;
        })
        case CHANGE_COMPLETED_TODO: return state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item, 
                    todos: item.todos.map(itemTodo => {
                        if (itemTodo.id === payload.todoId ) {
                           return {
                            ...itemTodo,
                            completed: !itemTodo.completed
                           } 
                        }
                        return itemTodo;
                    })
                }
            } 
            return item;
        })
        case CHANGE_IMPORTANT_TODO: return state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item, 
                    todos: item.todos.map(itemTodo => {
                        if (itemTodo.id === payload.todoId ) {
                           return {
                            ...itemTodo,
                            important: !itemTodo.important
                           } 
                        }
                        return itemTodo;
                    })
                }
            } 
            return item;
        })
        case CHANGE_DEADLINE_DATE_TODO: return state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item, 
                    todos: item.todos.map(itemTodo => {
                        if (itemTodo.id === payload.todoId ) {
                           return {
                            ...itemTodo,
                            deadlineDate: payload.deadlineDate
                           } 
                        }
                        return itemTodo;
                    })
                }
            } 
            return item;
        })
        case CHANGE_NOTE_TODO: return  state.map(item => {
            if (item.id === payload.listId) {
                return {
                    ...item, 
                    todos: item.todos.map(itemTodo => {
                        if (itemTodo.id === payload.todoId ) {
                           return {
                            ...itemTodo,
                            note: payload.note
                           } 
                        }
                        return itemTodo;
                    })
                }
            } 
            return item;
        })
        default: return state
    }
}
export default dataReducer;