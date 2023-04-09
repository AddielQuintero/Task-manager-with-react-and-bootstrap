import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks'

const TaskContext = createContext()

function TaskProvider(props) {
  const [tasks, updateTasks, loading, sincronizedTask] = useLocalStorage(
    'API_1',
    []
  )

  const [value, setValue] = useState('')

  const handleChangeInput = (event) => {
    setValue(event.target.value)
  }

  const handleAddTask = (description) => {
    const taskAux = [...tasks]
    const trimDescription = description.trim()
    function generateID(item) {
      let id
      do {
        id = Math.floor(Math.random() * 1000000)
      } while (item.includes(id))
      return id
    }

    let id = generateID(taskAux)
    if (!!trimDescription) {
      taskAux.unshift({ id: id, description, completed: false })
      updateTasks(taskAux)
    }
  }

  const handleCompleteTask = (id) => {
    // const taskIndex = tasks.findIndex(task => task.text === text);
    // taskIndex >= 0 && (newTasks[taskIndex].completed = !newTasks[taskIndex].completed)
    const taskAux = [...tasks]
    taskAux.find((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
    })
    updateTasks(taskAux)
  }

  const handleDeleteTask = (id) => {
    const taskAux = [...tasks]
    taskAux.map((task, index) => {
      if (index > -1 && task.id === id) {
        taskAux.splice(index, 1)
      }
    })
    updateTasks(taskAux)
  }

  let taskSearch = []
  if (!value.length >= 1) {
    taskSearch = tasks
  } else {
    taskSearch = tasks.filter((task) => {
      return task.description.toLowerCase().includes(value.toLowerCase())
    })
  }

  const taskTotal = taskSearch.length
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        value,
        show,
        taskSearch,
        taskTotal,
        loading,
        sincronizedTask,
        handleChangeInput,
        handleCompleteTask,
        handleDeleteTask,
        handleAddTask,
        handleClose,
        handleShow,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider }
