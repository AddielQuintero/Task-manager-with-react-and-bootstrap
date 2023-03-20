import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { TodoContext } from '../contexts'
import { TodoProgressBar } from './todoProgressBar'
import { FormatDate } from '../utilities'

function TodoCounter() {
  const { todos } = useContext(TodoContext)
  const max = todos.length
  const now = todos.filter((element) => element.completed).length

  return (
    <Row className="todo__counter w-100 mx-0 mb-2">
      <Col xs={6} className="px-0">
        <h1>App</h1>
        <h1>tasks</h1>
      </Col>
      <Col
        xs={6}
        className="d-flex flex-column justify-content-between align-items-end px-0"
      >
        <FormatDate />
        <span>{`${max - now} task left`}</span>
      </Col>
      <Col className="todo__progress-bar px-0 pt-1">
        <TodoProgressBar max={max} now={now} />
      </Col>
    </Row>
  )
}
export { TodoCounter }
