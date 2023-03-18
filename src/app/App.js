import { useState } from 'react'
import { AppUi } from './AppUI'

const api = [
  { id: 1, text: 'Read for 1 hour', completed: false },
  { id: 2, text: 'Watering plants', completed: true },
  { id: 3, text: 'Making the bed', completed: true },
  { id: 4, text: 'Throw trash', completed: true },
]

function App() {
  const [todos, setTodos] = useState(api)

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
    setTodos(todoAux)
  }

  const handleDeleteTodo = (id) => {
    const todoAux = [...todos]
    todoAux.map((todo, index) => {
      if (index > -1 && todo.id === id) {
        todoAux.splice(index, 1)
      }
    })
    setTodos(todoAux)
  }

  let todosSearch = []
  if (!value.length >= 1) {
    todosSearch = todos
  } else {
    todosSearch = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(value.toLowerCase())
    })
  }

  return (
    <AppUi
      todos={todos}
      value={value}
      handleChangeInput={handleChangeInput}
      todosSearch={todosSearch}
      handleCompleteTodo={handleCompleteTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleAddTask={handleAddTask}
    />
  )
}

export default App
