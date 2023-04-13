import { useState } from 'react'

export const useSearch = (tasks) => {
  const [value, setValue] = useState('')

  const handleChangeInput = (event) => {
    setValue(event.target.value)
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

  return { value, taskSearch, taskTotal, handleChangeInput }
}
