import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { TodoCounter } from './components/todoCounter'
import { TodoSearch } from './components/todoSearch'
import { TodoList } from './components/todoList'
import { TodoItem } from './components/todoItem'
import { TodoCreateButton } from './components/todoCreateButton'

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

  const handleCompleteTodo = (text) => {
    const todoAux = [...todos]
    todoAux.find((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed
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
    <React.Fragment>
      <Container className="todo__container py-5">
        <Row className="todo__row m-auto py-3">
          <Col sm={12} className="d-flex align-items-center">
            <TodoCounter todo={todos} />
          </Col>
          <Col sm={12} className="py-2">
            <TodoSearch value={value} handleChange={handleChangeInput} />
          </Col>
          <Col sm={12}>
            <TodoList>
              {todosSearch.map((todo) => (
                <TodoItem
                  key={todo.text}
                  todo={todo}
                  onComplete={handleCompleteTodo}
                />
              ))}
            </TodoList>
          </Col>
          <Col sm={12} className="d-flex flex-column align-items-end pt-4">
            <TodoCreateButton onClick={handleAddTask} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App
