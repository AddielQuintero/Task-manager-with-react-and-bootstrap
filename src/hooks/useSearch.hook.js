import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useSearch = (tasks) => {
  const [value, setValue] = useState('')
  const [params, setParams] = useSearchParams()

  const handleChangeInput = (event) => {
    // setValue(event.target.value)
    let params = { search: event.target.value }
    setParams(params)
  }

  useEffect(() => {
    const search = params.get('search') ?? ''
    setValue(search)
  }, [params])

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
