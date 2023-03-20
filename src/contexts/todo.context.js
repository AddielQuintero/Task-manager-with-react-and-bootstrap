import { createContext, useState } from 'react'
import { useLocaStorage } from '../hooks'

const TodoContext = createContext()

function TodoProvider(props) {
  const [todos, updateTodos] = useLocaStorage('API_1', [])

  const [value, setValue] = useState('')

  const handleChangeInput = (event) => {
    setValue(event.target.value)
  }

  const handleAddTask = () => {
    console.log('adicionando new task')
  }

  const handleCompleteTodo = (id) => {
    // const todoIndex = todos.findIndex(todo => todo.text === text);
    // todoIndex >= 0 && (newTodos[todoIndex].completed = !newTodos[todoIndex].completed)
    const todoAux = [...todos]
    todoAux.find((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })
    updateTodos(todoAux)
  }

  const handleDeleteTodo = (id) => {
    const todoAux = [...todos]
    todoAux.map((todo, index) => {
      if (index > -1 && todo.id === id) {
        todoAux.splice(index, 1)
      }
    })
    updateTodos(todoAux)
  }

  let todosSearch = []
  if (!value.length >= 1) {
    todosSearch = todos
  } else {
    todosSearch = todos.filter((todo) => {
      return todo.description.toLowerCase().includes(value.toLowerCase())
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        value,
        handleChangeInput,
        todosSearch,
        handleCompleteTodo,
        handleDeleteTodo,
        handleAddTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
