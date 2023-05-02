import { useLocalStorage } from '.'

export const useTask = () => {
  const { item: tasks, saveItem: updateTasks, synchronizedTask, loading } = useLocalStorage('API_1', [])

  const max = tasks.length
  const now = tasks.filter((element) => element.completed).length
  let percent = Math.round((now / max) * 100) || 0

  const generateID = (item) => {
    let listID = item.map((item) => item.id)
    let id = !listID.length ? 0 : Math.max(...listID)
    return id + 1
  }

  const handleAddTask = (description) => {
    const taskAux = [...tasks]
    const trimDescription = description.trim()

    let id = generateID(taskAux)
    if (!!trimDescription) {
      taskAux.unshift({ id, description, completed: false })
      updateTasks(taskAux)
    }
  }

  const handleCompleteTask = (id) => {
    const taskAux = [...tasks]
    taskAux.find((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
    })
    updateTasks(taskAux)
  }

  const handleUpdateTask = ({ id, description }) => {
    const taskAux = [...tasks]
    taskAux.find((task) => {
      if (task.id === id) {
        task.description = description
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

  const state = { tasks, max, now, percent, loading }

  const stateUpdaters = {
    synchronizedTask,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteTask,
    handleAddTask,
  }

  return {
    state,
    stateUpdaters,
  }
}
