import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TodoCounter } from './components/todoCounter'
import { TodoSearch } from './components/todoSearch'
import { TodoList } from './components/todoList'
import { TodoItem } from './components/todoItem'
import { TodoCreateButton } from './components/todoCreateButton'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={12}>
            <TodoCounter />
          </Col>
          <Col sm={12}>
            <TodoSearch />
          </Col>
          <Col sm={12}>
            <TodoList>
              <TodoItem />
            </TodoList>
          </Col>
          <Col sm={12}>
            <TodoCreateButton />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App
