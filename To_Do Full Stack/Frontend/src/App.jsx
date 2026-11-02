import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import AddTask from "./pages/AddTask"
import Tasks from './pages/Tasks'
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path = "/addTask" element = {<AddTask/>}/>
        <Route path = '/tasks' element = {<Tasks/>}/>

      </Routes>
    </Router>

    

  )
}

export default App
