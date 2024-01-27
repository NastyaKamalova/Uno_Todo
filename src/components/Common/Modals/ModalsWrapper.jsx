import { useSelector } from "react-redux"
import CreatingList from "./CreatingList";
import CreatingTodo from "./CreatingTodo";
import DeletingTodo from "./DeletingTodo";
import RenamingList from "./RenamingList";
import DeletingList from "./DeletingList";
import Logouting from "./Logouting";
import UserSettings from "./UserSettings";

const ModalsWrapper = () => {
    const isCreatingList = useSelector(state => state.todoList.creatingList);
    const isCreatingTodo = useSelector(state => state.todoList.creatingTodo);
    const isDeletingList = useSelector(state => state.todoList.deletingList);
    const isRenamingList = useSelector(state => state.todoList.renamingList);
    const isDeletingTodo = useSelector(state => state.todoPanel.deletingTask);
    const isLogouting = useSelector(state => state.userPanel.logouting);
    const isShowingUserPanel = useSelector(state => state.userPanel.showingUserPanel);
    
    return (
        <>
            {isCreatingList && <CreatingList/>}
            {isCreatingTodo && <CreatingTodo/>}
            {isDeletingList && <DeletingList/>}
            {isRenamingList && <RenamingList/>}
            {isDeletingTodo && <DeletingTodo/>}
            {isShowingUserPanel && <UserSettings/>}
            {isLogouting && <Logouting/>}
        </>
    )
}

export default ModalsWrapper


