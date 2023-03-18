import { Row, Col } from 'react-bootstrap'
import { TodoProgressBar } from './todoProgressBar'
import { TodoCurrentDate } from './todoCurrentDate'

function TodoCounter(props) {
  // console.log(props)
  const { todo } = props
  const max = todo.length
  const Now = todo.filter((element) => element.completed).length

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
        <TodoCurrentDate />
        <span>{`${max - Now} task left`}</span>
      </Col>
      <Col className="todo__progress-bar px-0 pt-1">
        <TodoProgressBar max={max} now={Now} />
      </Col>
    </Row>
  )
}
export { TodoCounter }
