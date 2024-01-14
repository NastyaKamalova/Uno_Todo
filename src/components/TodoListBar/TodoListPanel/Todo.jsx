import { useDispatch, useSelector } from "react-redux"
import ListItem from "../../../ui/ListItem"
import { openTodoPanelAndSetActiveTodo } from "../../../store/actionCreators/thunks"

const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const activeTodoId = useSelector(state => state.todoPanel.activeTodo.todoId)
    const isActive = todo.id == activeTodoId;
    return <ListItem 
                clickHandler={() => {
                    dispatch(openTodoPanelAndSetActiveTodo({
                        todoId: todo.id, 
                        listId: todo.listId, 
                        showingTodoPanel: true
                    }))
                }}
                completed={todo.completed}
                title={todo.title}
                deadlineDate={todo.deadlineDate}
                important={todo.important}
                active={isActive}
            />
}
export default Todo


