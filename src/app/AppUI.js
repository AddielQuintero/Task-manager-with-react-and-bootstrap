import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TodoContext } from '../contexts'
import { TodoCounter } from '../components'
import { TodoSearch } from '../components'
import { TodoList } from '../components'
import { TodoItem } from '../components'
import { TodoCreateButton } from '../components'

function AppUi() {
  const { todosSearch, handleCompleteTodo, handleDeleteTodo } =
    useContext(TodoContext)

  return (
    <React.Fragment>
      <Container className="todo__container py-5">
        <Row className="todo__row m-auto py-3 align-content-start">
          <Col sm={12} className="d-flex align-items-center">
            <TodoCounter />
          </Col>
          <Col sm={12} className="py-2">
            <TodoSearch />
          </Col>
          <Col sm={12} className="overflow-hidden h-50">
            <TodoList>
              {!todosSearch.length && (
                <li className="new__task">¡Add a new task!</li>
              )}
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
            <TodoCreateButton />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
export { AppUi }
