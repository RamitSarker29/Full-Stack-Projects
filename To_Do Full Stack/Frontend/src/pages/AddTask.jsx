import { useNavigate } from "react-router-dom"
import axios from "axios"


const AddTask = () => {

    const navigate = useNavigate()

    const formHandle = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const title = formData.get('title')
        const details = formData.get('details')


        axios.post('http://localhost:3000/addTask' , {
            title , details
        })
        .then(() => {
            navigate('/tasks')
        })
        .catch((err) => {
            console.log(err)
            alert('Error adding task')
        })
    }

  return (
    <div>
      
    <form className="addTaskForm" onSubmit={formHandle}>
        <h1 className="heading">
            To Do List
        </h1>
        <div className="inputs">
            <input type="text" name="title" placeholder="Add Title" />
            <input type="text" name="details" placeholder="Add Details" />
            <button className="btn" type="submit">Add Task</button>

        </div>

        
    </form>

    </div>
  )
}

export default AddTask
