import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TodoCounter } from '../components/todoCounter'
import { TodoSearch } from '../components/todoSearch'
import { TodoList } from '../components/todoList'
import { TodoItem } from '../components/todoItem'
import { TodoCreateButton } from '../components/todoCreateButton'

function AppUi(props) {
  const {
    todos,
    value,
    handleChangeInput,
    todosSearch,
    handleCompleteTodo,
    handleDeleteTodo,
    handleAddTask,
  } = props
  return (
    <React.Fragment>
      <Container className="todo__container py-5">
        <Row className="todo__row m-auto py-3 align-content-start">
          <Col sm={12} className="d-flex align-items-center">
            <TodoCounter todo={todos} />
          </Col>
          <Col sm={12} className="py-2">
            <TodoSearch value={value} handleChange={handleChangeInput} />
          </Col>
          <Col sm={12} className="overflow-hidden h-50">
            <TodoList>
              {todosSearch.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onComplete={handleCompleteTodo}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </TodoList>
          </Col>
          <Col
            sm={12}
            className="position-absolute bottom-0 d-flex justify-content-end pt-4 pb-3"
          >
            <TodoCreateButton onClick={handleAddTask} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
export { AppUi }
