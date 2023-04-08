import { useState } from 'react'
import { useLocalStorage } from '.'

export const useTask = () => {
  const [tasks, updateTasks] = useLocalStorage('API_1', [])

  const [value, setValue] = useState('')

  const max = tasks.length
  const now = tasks.filter((element) => element.completed).length
  let percent = Math.round((now / max) * 100) || 0

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

  return {
    tasks,
    value,
    max,
    now,
    percent,
    taskSearch,
    taskTotal,
    handleChangeInput,
    handleCompleteTask,
    handleDeleteTask,
    handleAddTask,
  }
}
