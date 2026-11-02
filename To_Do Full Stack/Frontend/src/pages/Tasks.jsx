import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"


const Tasks = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/tasks')
        .then((res) =>{
            setTasks(res.data.tasks)
        

        })
        .catch((err) =>{
            console.log(err)
            alert('Error fetching tasks')
        })

    } , [])

    const deleteTask = async(id) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${id}`)
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id))

            console.log('task deleted successfully')
        } catch (error) {
            console.log(error)
            alert('Error deleting task')

            
        }
    }




return (
    <div className="allTasks">
        <h1 className="heading">Your Tasks</h1>

        {tasks.length === 0 ? (
            <p className="noTasks">
                Nothing to delete. No tasks available!
            </p>
        ) : (
            tasks.map((task) => (
                <div className="task" key={task._id}>
                    <h2 className="taskTitle">{task.title}</h2>
                    <p className="taskDetails">{task.details}</p>

                    <button
                        className="deleteBtn"
                        onClick={() => deleteTask(task._id)}
                    >
                        Delete
                    </button>
                </div>
            ))
        )}
    </div>
)
}

export default Tasks
