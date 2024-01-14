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

const renameList = (payload) => ({type: CHANGE_LIST_TITLE, payload});
const createList = (payload) => ({type: ADD_LIST, payload});
const deleteList = (payload) => ({type: REMOVE_LIST, payload});
const createTodo = (payload) => ({type: ADD_TODO_TO_LIST, payload});
const changeTodoTitle = (payload) => ({type: CHANGE_TODO_TITLE, payload});
const removeTodo = (payload) => ({type: REMOVE_TODO, payload});
const changeCompletedTodo = (payload) => ({type: CHANGE_COMPLETED_TODO, payload});
const changeImportantTodo = (payload) => ({type: CHANGE_IMPORTANT_TODO, payload});
const changeDeadline = (payload) => ({type: CHANGE_DEADLINE_DATE_TODO, payload});
const changeNoteTodo = (payload) => ({type: CHANGE_NOTE_TODO, payload});

export {
    renameList,
    createList,
    deleteList,
    createTodo,
    changeTodoTitle,
    removeTodo,
    changeCompletedTodo,
    changeImportantTodo,
    changeDeadline,
    changeNoteTodo
}