import { useSelector } from "react-redux";
import AppContext from "./context/context";
import { useState } from "react";
import StartPage from "./components/StartPage";
import TodoApp from "./components/TodoApp";

function App() {
  const context = useSelector((state) => ({
    palette: state.userPanel.palette,
    lang: state.userPanel.lang,
    mode: state.userPanel.mode
  }))

  const [isStartPage, setIsStartPage] = useState(true);
  if (isStartPage) return <StartPage setIsStartPage={setIsStartPage} />
  
  return (
    <>
      <AppContext.Provider value={context} >
        <TodoApp/>
      </AppContext.Provider>
    </>
  );
}

export default App;






// const SomeComponent = () => {
//   return (
//       <>
      
//       </>
//   )
// }

// export default SomeComponent;