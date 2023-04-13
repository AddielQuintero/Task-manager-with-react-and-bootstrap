import { useLocalStorage } from '.'

export const useTask = () => {
  const {
    item: tasks,
    saveItem: updateTasks,
    sincronizedTask,
    loading,
  } = useLocalStorage('API_1', [])

  const max = tasks.length
  const now = tasks.filter((element) => element.completed).length
  let percent = Math.round((now / max) * 100) || 0

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

  const state = { tasks, max, now, percent, loading }

  const stateUpdaters = {
    sincronizedTask,
    handleCompleteTask,
    handleDeleteTask,
    handleAddTask,
  }
  
  return {
    state,
    stateUpdaters,
  }
}
